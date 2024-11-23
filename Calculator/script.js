/* script.js */
const resultField = document.getElementById('result');

function appendSymbol(symbol) {
  resultField.value += symbol;
}

function clearDisplay() {
  resultField.value = '';
}

function deleteLast() {
  resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
  try {
    resultField.value = eval(resultField.value);
  } catch {
    resultField.value = 'Error';
  }
}
