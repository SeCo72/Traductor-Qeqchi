package main

import (
	"database/sql"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq" // Importar driver de postgres SQL
)

var db *sql.DB // Variable Global para la conexion a la DB

// Definir la estructura Frase
type Frase struct {
	ID         int    `json:"id"`
	Texto      string `json:"texto"`
	Traduccion string `json:"traduccion"`
}

func main() {

	gin.SetMode(gin.ReleaseMode) // Configura el GIN para que corra en modo Release

	// Cadena de conexion a la base de datos
	connStr := "user=postgres password=4572. dbname=traductor sslmode=disable"

	var err error

	// Establece la conexión a las base de datos
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		panic(err) // Si hay un error, detiene el programa
	}
	defer db.Close() // Cierra la conexión al finalizar el programa

	// Crea una instancia del erutador GIN
	r := gin.Default()

	// Configura una ruta estática para los archivos de audio
	r.Static("/audios", "./web/audios")

	// Configura el servidor para servir archivos estáticos desde el directorio
	r.Static("/static", "./web/static")

	// Carga las plantillas HTML desde el directorio
	r.LoadHTMLGlob("web/templates/*")

	// Define la ruta que renderiza el archivo index.html
	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	// Define la ruta para la solicitud de traducción POST
	r.POST("/translate", func(c *gin.Context) {
		// Obtiene los parámetros de la solicitud: texto, idioma de origen y destino
		text := c.PostForm("text")
		from := c.PostForm("from")
		to := c.PostForm("to")

		// Realiza la traducción y envía la respuesta vcomo JSON
		translation := traducir(text, from, to)

		c.JSON(200, gin.H{
			"translation": translation,
		})
	})

	// Nueva ruta para obtener las frases y traducciones
	r.GET("/frases", func(c *gin.Context) {
		frases, err := obtenerFrases()
		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}

		c.JSON(200, frases)
	})

	// Inicia el servidor en el puerto
	r.Run(":3000")

	// Configura una ruta estática para los archivos
	r.Static("/static", "./web/static")
	r.StaticFS("/static", http.Dir("./web/static"))
}

// Funcion para obtener las traducciones de la base de datos
func obtenerTraducciones(from, to string) (map[string]string, error) {
	traducciones := make(map[string]string) // Crea un mapa para almacenar las traducciones

	// Consulta la base de datos para obtener las traducciones
	rows, err := db.Query("SELECT palabra, traduccion, idioma_origen, idioma_destino FROM traducciones")
	if err != nil {
		return nil, err // Devuelve el error si ocurre
	}
	defer rows.Close() // Cierra el iterador de filas al finalizar

	// Itera sobre las filas y almacena las traducciones en un mapa
	for rows.Next() {
		var palabra, traduccion, idioma_origen, idioma_destino string
		if err := rows.Scan(&palabra, &traduccion, &idioma_origen, &idioma_destino); err != nil {
			return nil, err // Devuelve el error si ocurre
		}

		// Convierte las palabras a minúsculas antes de almacenarlas
		palabra = strings.ToLower(palabra)
		traduccion = strings.ToLower(traduccion)

		// Almacena las traducciones según el idioma de origen y destino
		if idioma_origen == to && idioma_destino == from {
			traducciones[traduccion] = palabra
		} else {
			traducciones[palabra] = traduccion
		}
	}

	return traducciones, nil
}

// Funcion para realizar la traducción de texto
func traducir(text, from, to string) string {
	// Obtiene las traducciones desde la base de datos
	traducciones, err := obtenerTraducciones(from, to)
	if err != nil {
		return err.Error() // Devuelve el error si ocurre
	}

	// Divide el texto en palabras
	words := strings.Split(text, " ")
	translatedWords := make([]string, len(words))

	// Traduce cada palabra según las traducciones obtenidas
	for i, word := range words {
		// Guarda la capitalización original de la palabra
		isCapitalized := word == strings.Title(strings.ToLower(word))
		isUpperCase := word == strings.ToUpper(word)

		wordLower := strings.ToLower(word)
		translation, ok := traducciones[wordLower]

		if ok {
			if isCapitalized {
				translation = strings.Title(translation)
			} else if isUpperCase {
				translation = strings.ToUpper(translation)
			}
			translatedWords[i] = translation
		} else {
			translatedWords[i] = word
		}

	}

	// Une las palabras traducidas en un solo texto y lo devuelve
	return strings.Join(translatedWords, " ")
}

// Función para obtener las frases y traducciones de la base de datos
func obtenerFrases() ([]Frase, error) {
	rows, err := db.Query("SELECT id, frase, traduccion FROM frases")
	if err != nil {
		return nil, err // Devuelve el error si ocurre
	}
	defer rows.Close() // Cierra el iterador de filas al finalizar

	var frases []Frase
	for rows.Next() {
		var f Frase
		if err := rows.Scan(&f.ID, &f.Texto, &f.Traduccion); err != nil {
			return nil, err // Devuelve el error si ocurre
		}
		frases = append(frases, f)
	}

	return frases, nil
}
