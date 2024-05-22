// Obtener elementos del DOM
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const translateBtn = document.getElementById("translate-btn");
const fromSelect = document.getElementById("from-select");
const toSelect = document.getElementById("to-select");
const swapBtn = document.getElementById("swap-btn");
const audioBtn = document.getElementById("audio-btn");
const frasesBtn = document.getElementById("frases-btn");
const frasesModal = document.getElementById("frases-modal");
const frasesLista = document.getElementById("frases-lista");
const cerrarModal = document.querySelector(".cerrar-modal");

const audios = {
  "am": "/audios/am.mp3",
  "araña": "/audios/araña.mp3"
};

// Mostrar frases en el modal
function mostrarFrases() {
  fetch("/frases")
    .then(response => response.json())
    .then(frases => {
      frasesLista.innerHTML = frases.map(frase => `<li>${frase.texto} - ${frase.traduccion}</li>`).join("");
      frasesModal.style.display = "block";
    })
    .catch(error => console.error("Error al obtener frases:", error));
}

// Ocultar el modal de frases
function ocultarFrases() {
  frasesModal.style.display = "none";
}

// Traducir texto
function traducir() {
  const text = inputText.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  fetch("/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `text=${encodeURIComponent(text)}&from=${from}&to=${to}`,
  })
    .then(response => response.json())
    .then(data => outputText.value = data.translation)
    .catch(error => console.error("Error:", error));
}

// Intercambiar idiomas y traducir
function swapLanguages() {
  [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
  [inputText.value, outputText.value] = [outputText.value, inputText.value];
  traducir();
}

// Reproducir audio de la traducción
function reproducirAudio() {
  const audioSrc = audios[outputText.value];
  if (audioSrc) {
    new Audio(audioSrc).play();
  } else {
    console.log("No se encontró la grabación para esta traducción.");
  }
}

// Agregar listeners a los botones
document.addEventListener("DOMContentLoaded", function() {
  frasesBtn.addEventListener("click", mostrarFrases);
  cerrarModal.addEventListener("click", ocultarFrases);
});

translateBtn.addEventListener("click", traducir);
swapBtn.addEventListener('click', swapLanguages);
audioBtn.addEventListener("click", reproducirAudio);
