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
"nuevo": "/audios/nuevo.mp3", "contar": "/audios/contar.mp3", "araña": "/audios/araña.mp3", "fantasma": "/audios/fantasma.mp3", "sal": "/audios/sal.mp3", "pesado": "/audios/pesado.mp3",
"correr": "/audios/correr.mp3", "cerdo": "/audios/cerdo.mp3", "cotuza": "/audios/cotuza.mp3", "idioma": "/audios/idioma.mp3", "hueso": "/audios/hueso.mp3", "mico": "/audios/mico.mp3",
"jaguar": "/audios/jaguar.mp3", "medidor": "/audios/medidor.mp3", "esfera": "/audios/esfera.mp3", "enfrente": "/audios/enfrente.mp3", "tierra": "/audios/tierra.mp3", "cama": "/audios/cama.mp3",
"ratón": "/audios/ratón.mp3", "pronto": "/audios/pronto.mp3", "tarde": "/audios/tarde.mp3", "escalera": "/audios/escalera.mp3", "ayer": "/audios/ayer.mp3", "boca": "/audios/boca.mp3",
"apártense": "/audios/apártense.mp3", "tepezcuintle": "/audios/tepezcuintle.mp3", "tigre": "/audios/am.mp3", "murmurar": "/audios/murmurar.mp3", "lluvia": "/audios/lluvia.mp3",
"mazorca": "/audios/mazorca.mp3", "uña": "/audios/uña.mp3", "aire": "/audios/aire.mp3", "cabello": "/audios/cabello.mp3", "vena": "/audios/vena.mp3", "conejo": "/audios/conejo.mp3",
"cabeza": "/audios/cabeza.mp3", "siempre": "/audios/siempre.mp3", "regla": "/audios/regla.mp3", "güacal": "/audios/güacal.mp3", "temprano": "/audios/temprano.mp3", "frijol": "/audios/frijol.mp3",
"televisor": "/audios/televisor.mp3", "casa": "/audios/casa.mp3", "muela": "/audios/muela.mp3", "tinaja": "/audios/tinaja.mp3", "milpa": "/audios/milpa.mp3", "amargo": "/audios/amargo.mp3",
"gemelos": "/audios/gemelos.mp3", "espejo": "/audios/espejo.mp3", "limón": "/audios/limón.mp3", "mango": "/audios/mango.mp3", "bigote": "/audios/bigote.mp3", "mesa": "/audios/mesa.mp3",
"manzana": "/audios/manzana.mp3", "basura": "/audios/basura.mp3", "madre": "/audios/madre.mp3", "diarrea": "/audios/diarrea.mp3", "patio": "/audios/patio.mp3", "pobre": "/audios/pobre.mp3",
"cerca": "/audios/cerca.mp3", "pie": "/audios/pie.mp3", "horcón": "/audios/horcón.mp3", "puerta": "/audios/puerta.mp3", "casa": "/audios/casa.mp3", "tres": "/audios/tres.mp3",
"sombrero": "/audios/sombrero.mp3", "tamalito": "/audios/tamalito.mp3", "cucaracha": "/audios/cucaracha.mp3", "piedra": "/audios/piedra.mp3", "papaya": "/audios/papaya.mp3",
"orgulloso": "/audios/orgulloso.mp3", "amarillo": "/audios/amarillo.mp3", "viejo": "/audios/viejo.mp3", "podrido": "/audios/podrido.mp3", "suéter": "/audios/suéter.mp3",
"debajo": "/audios/debajo.mp3", "hija": "/audios/hija.mp3", "cortina": "/audios/cortina.mp3", "jocote": "/audios/jocote.mp3", "verde": "/audios/verde.mp3", "humo": "/audios/humo.mp3",
"arena": "/audios/arema.mp3", "cuerpo": "/audios/cuerpo.mp3", "silla": "/audios/silla.mp3", "sudor": "/audios/sudor.mp3", "ropa": "/audios/ropa.mp3", "caer": "/audios/caer.mp3",
"cerro": "/audios/cerrp.mp3", "presa": "/audios/presa.mp3", "rodilla": "/audios/rodilla.mp3", "viga": "/audios/viga.mp3", "piel": "/audios/piel.mp3", "mano": "/audios/mano.mp3",
"corte": "/audios/corte.mp3", "cerebro": "/audios/cerebro.mp3", "pantalón": "/audios/pantalón.mp3", "hombre": "/audios/hombre.mp3", "fuego": "/audios/fuego.mp3", "jarro": "/audios/jarro.mp3",
"animal": "/audios/animal.mp3",

"ak'": "/audios/ak'.mp3", "ajlank": "/audios/ajlank.mp3", "am": "/audios/am.mp3", "anum": "/audios/anum.mp3", "atz'am": "/audios/atz'am.mp3", "aal": "/audios/aal.mp3", 
"aanilak": "/audios/aanilak.mp3", "aaq": "/audios/aaq.mp3", "aaqam": "/audios/aaqam.mp3", "aatinob'al": "/audios/aatinob'al.mp3", "b'aq": "/audios/b'aq.mp3", "b'atz'": "/audios/b'atz'.mp3", 
"b'alam": "/audios/b'alam.mp3", "b'isleb'": "/audios/b'isleb'.mp3", "b'olotz": "/audios/b'olotz.mp3", "chiru": "/audios/chiru.mp3", "ch'och'": "/audios/ch'och'.mp3", "ch'aat": "/audios/ch'aat.mp3", 
"ch'o": "/audios/ch'o.mp3", "chiseeb'": "/audios/chiseeb'.mp3", "ewu": "/audios/ewu.mp3", "eeb'": "/audios/eeb'.mp3", "ewer": "/audios/ewer.mp3", "e": "/audios/e.mp3", "elenqex": "/audios/elenqex.mp3", 
"jalaw": "/audios/jalaw.mp3", "hix": "/audios/hix.mp3", "hasb'ak": "/audios/hasb'ak.mp3", "hab'": "/audios/hab'.mp3", "hal": "/audios/hal.mp3", "ixi'ij": "/audios/ixi'ij.mp3", 
"iq'": "/audios/iq'.mp3", "ismal": "/audios/ismal.mp3", "ich'mul": "/audios/ich'mul.mp3", "imul": "/audios/imul.mp3", "jolom": "/audios/jolom.mp3", "junelik": "/audios/junelik.mp3", 
"juch'leb'": "/audios/juch'leb'.mp3", "joom": "/audios/joom.mp3", "jik'o": "/audios/jik'o.mp3", "kenq'": "/audios/kenq'.mp3", "kaxmu": "/audios/kaxmu.mp3", "kab'l": "/audios/kab'l.mp3", 
"ka": "/audios/ka.mp3", "kuk": "/audios/kuk.mp3", "k'al": "/audios/k'al.mp3", "k'a": "/audios/k'a.mp3", "lut": "/audios/lut.mp3", "lem": "/audios/lem.mp3", "lamunx": "/audios/lamunx.mp3", 
"mank": "/audios/mank.mp3", "mach": "/audios/mach.mp3", "meex": "/audios/meex.mp3", "mansaan": "/audios/mansaan.mp3", "mul": "/audios/mul.mp3", "na'b'ej": "/audios/na'b'ej.mp3", 
"nume'sa'": "/audios/nume'sa'.mp3", "neb'aal": "/audios/neb'aal.mp3", "neb'a'": "/audios/neb'a'.mp3", "nach'": "/audios/nach'.mp3", "oq": "/audios/oq.mp3", "oqech": "/audios/oqech.mp3", 
"okeb'aal": "/audios/okeb'aal.mp3", "ochoch": "/audios/ochoch.mp3", "oxib'": "/audios/oxib'.mp3", "punit": "/audios/punit.mp3", "poch": "/audios/poch.mp3", "paachach": "/audios/paachach.mp3", 
"pek": "/audios/pek.mp3", "putul": "/audios/putul.mp3", "q'etq'et": "/audios/q'etq'et.mp3", "q'an": "/audios/q'an.mp3", "q'eel": "/audios/q'eel.mp3", "q'eenaq": "/audios/q'eenaq.mp3", 
"q'ixt'ikr": "/audios/q'ixt'ikr.mp3", "rub'el": "/audios/reb'el.mp3", "rab'in": "/audios/rab'in.mp3", "ramleb'": "/audios/ramleb'.mp3", "rum": "/audios/rum.mp3", "rax": "/audios/rax.mp3", 
"sib'": "/audios/sib'.mp3", "samayib'": "/audios/samayib'.mp3", "tib'el": "/audios/tib'el.mp3", "tem": "/audios/tem.mp3", "tiqob'": "/audios/tiqob'.mp3", "t'ikr": "/audios/t'ikr.mp3", 
"t'ane'k": "/audios/t'ane'k.mp3", "tzuul": "/audios/tzuul.mp3", "tzak": "/audios/tzak.mp3", "tzelek": "/audios/tzelek.mp3", "tz'amb'a": "/audios/tz'amb'a.mp3", "tz'umal": "/audios/tz'umal.mp3", 
"uq'": "/audios/uq'.mp3", "uuq": "/audios/uuq.mp3", "ulul": "/audios/ulul.mp3", "wex": "/audios/wex.mp3", "winq": "/audios/winq.mp3", "xaml": "/audios/xaml.mp3", "xaar": "/audios/xaar.mp3", 
"xul": "/audios/xul.mp3" 
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
