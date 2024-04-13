package main

import (
	"strings" // Importa el paquete translations
	"traductor/pkg/translations"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Servir archivos estáticos
	r.Static("/static", "./web/static")

	// Ruta raíz
	r.LoadHTMLGlob("web/templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	// Ruta para la traducción
	r.POST("/translate", func(c *gin.Context) {
		// Obtener el texto a traducir y los idiomas de origen y destino del cuerpo de la solicitud
		text := c.PostForm("text")
		from := c.PostForm("from")
		to := c.PostForm("to")

		// Traducir el texto
		translation := traducir(text, from, to)

		// Devolver la traducción
		c.JSON(200, gin.H{
			"translation": translation,
		})
	})

	// Iniciar el servidor
	r.Run(":3000")
}

func traducir(text, from, to string) string {
	words := strings.Split(text, " ")
	translatedWords := make([]string, len(words))

	for i, word := range words {
		translation, ok := translations.Translations[from][word]
		if ok {
			translatedWords[i] = translation
		} else {
			translatedWords[i] = word
		}
	}

	return strings.Join(translatedWords, " ")
}
