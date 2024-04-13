package main

import (
	"database/sql"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

var db *sql.DB

func main() {

	connStr := "user=postgres password=4572. dbname=traductor sslmode=disable"

	var err error
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	r := gin.Default()

	r.Static("/static", "./web/static")

	r.LoadHTMLGlob("web/templates/*")
	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	r.POST("/translate", func(c *gin.Context) {

		text := c.PostForm("text")
		from := c.PostForm("from")
		to := c.PostForm("to")

		translation := traducir(text, from, to)

		c.JSON(200, gin.H{
			"translation": translation,
		})
	})
	r.Run(":3000")

	r.Static("/static", "./web/static")
	r.StaticFS("/static", http.Dir("./web/static"))
}

func obtenerTraducciones(from, to string) (map[string]string, error) {
	traducciones := make(map[string]string)

	rows, err := db.Query("SELECT palabra, traduccion, idioma_origen, idioma_destino FROM traducciones")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var palabra, traduccion, idioma_origen, idioma_destino string
		if err := rows.Scan(&palabra, &traduccion, &idioma_origen, &idioma_destino); err != nil {
			return nil, err
		}

		if idioma_origen == to && idioma_destino == from {
			traducciones[traduccion] = palabra
		} else {
			traducciones[palabra] = traduccion
		}
	}

	return traducciones, nil
}

func traducir(text, from, to string) string {
	traducciones, err := obtenerTraducciones(from, to)
	if err != nil {

		return err.Error()
	}

	words := strings.Split(text, " ")
	translatedWords := make([]string, len(words))

	for i, word := range words {
		translation, ok := traducciones[word]
		if ok {
			translatedWords[i] = translation
		} else {
			translatedWords[i] = word
		}
	}

	return strings.Join(translatedWords, " ")
}
