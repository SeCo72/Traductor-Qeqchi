package main

import (
	"database/sql"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq" //driver PostgreSQL
)

var db *sql.DB //Variable Global para la conexion BD

func main() {

	//Cadena de conexion a la base de datos
	connStr := "user=postgres password=4572. dbname=traductor sslmode=disable"

	var err error

	//Establece la conexión a las base de datos
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	defer db.Close() //Cierra la conexión al finalizar el programa

	//Cra una instancia del erutador Gin
	r := gin.Default()

	//configura el servidor para servir archivos estáticos desde el directorio /.web/static
	r.Static("/static", "./web/static")

	//Carga las plantillas HTML desde el directorio ./web/templates
	r.LoadHTMLGlob("web/templates/*")

	//Define la ruta que renderiza el archivo index.html
	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	//Define la ruta para la solicitud de traducción POST
	r.POST("/translate", func(c *gin.Context) {

		//Obtiene los parámetros de la solicitud: texto, idioma de origen y destino
		text := c.PostForm("text")
		from := c.PostForm("from")
		to := c.PostForm("to")

		//Realiza la traducción y envía la respuesta vcomo JSON
		translation := traducir(text, from, to)

		c.JSON(200, gin.H{
			"translation": translation,
		})
	})

	//Inicia el servidor en el puerto 3000
	r.Run(":3000")

	r.Static("/static", "./web/static")
	r.StaticFS("/static", http.Dir("./web/static"))
}

// Funcion para obtener las traducciones de la base de datos
func obtenerTraducciones(from, to string) (map[string]string, error) {
	traducciones := make(map[string]string)

	//Consulta la base de datos para obtener las traducciones
	rows, err := db.Query("SELECT palabra, traduccion, idioma_origen, idioma_destino FROM traducciones")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	//Itera sobre las filas y almacena las traducciones en un mapa
	for rows.Next() {
		var palabra, traduccion, idioma_origen, idioma_destino string
		if err := rows.Scan(&palabra, &traduccion, &idioma_origen, &idioma_destino); err != nil {
			return nil, err
		}

		//almacena las traducciones según el idioma de origen y destino
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

	//Obtiene las traducciones desde la base de datos
	traducciones, err := obtenerTraducciones(from, to)
	if err != nil {

		return err.Error() //Devuelve el error si ocurre
	}

	//Divide el texto en palabras
	words := strings.Split(text, " ")
	translatedWords := make([]string, len(words))

	//Traduce cada palabra según las traducciones obtenidas
	for i, word := range words {
		translation, ok := traducciones[word]
		if ok {
			translatedWords[i] = translation
		} else {
			translatedWords[i] = word
		}
	}

	//Une las palabras traducidas en un solo texto y lo devuelve
	return strings.Join(translatedWords, " ")
}
