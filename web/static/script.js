const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const translateBtn = document.getElementById("translate-btn");
const fromSelect = document.getElementById("from-select");
const toSelect = document.getElementById("to-select");
const swapBtn = document.getElementById("swap-btn");

//Se agrega un listener al botón de traducción
translateBtn.addEventListener("click", () => {
  const text = inputText.value; //Obtiene el texto de entrada
  const from = fromSelect.value; //Obtiene el idioma de origen seleccionado
  const to = toSelect.value; //Obtiene el idioma de destino seleccionado

  //Realiza una solicitud POST al servidor para traducir el texto
  fetch("/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `text=${encodeURIComponent(text)}&from=${from}&to=${to}`,
  })
    .then((response) => response.json()) //Parsea la respuesta como JSON
    .then((data) => {
      outputText.value = data.translation; //Actualiza el área de salida con la traducción
    })
    .catch((error) => {
      console.error("Error:", error); //Maneja errores en la solicitud
    });
});

//Función para intercambiar los idiomas de origen y destino
function swapLanguages() {
  const temp = fromSelect.value; //Almacena temporalmente el idioma de origen
  fromSelect.value = toSelect.value; //Establece el idioma de origen como el idioma de destino
  toSelect.value = temp; //Establece el idioma de destino como el idioma original
  const inputTextValue = inputText.value; //Almacena temporalmente el texto de entrada
  const outputTextValue = outputText.value; //Almacena temporalmente el texto de salida 
  inputText.value = outputTextValue; //Actualiza el texto de entrada con el texto de salida
  outputText.value = inputTextValue; //Actualiza el texto de salida con el exto original
  
  //Se llama a la función traducir para realizar la traduccipon después de intercambiar lo idiomas
  traducir();
}

//Se agrega otro listener al botón de intercambio
swapBtn.addEventListener('click', swapLanguages);
