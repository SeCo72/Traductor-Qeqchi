const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const translateBtn = document.getElementById('translate-btn');
const fromSelect = document.getElementById('from-select');
const toSelect = document.getElementById('to-select');

translateBtn.addEventListener('click', () => {
  const text = inputText.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  // Realizar una solicitud POST al servidor para obtener la traducción
  fetch('/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `text=${encodeURIComponent(text)}&from=${from}&to=${to}`,
  })
    .then(response => response.json())
    .then(data => {
      outputText.value = data.translation;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});