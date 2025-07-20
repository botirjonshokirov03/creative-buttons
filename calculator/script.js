const display = document.getElementById('display');
const sci = document.querySelector('.scientific');

function append(value) {
  const current = display.value;
  const lastChar = current.slice(-1);

  // List of operators
  const operators = ['+', '-', '*', '/', '%'];

  // Prevent starting with an operator (except minus for negative numbers)
  if (current === '' && operators.includes(value) && value !== '-') {
    return;
  }

  // Prevent double operators (e.g. ++, **, //)
  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }

  // Allow appending
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Avoid eval-ing invalid endings like "1+" or "2/"
    const lastChar = display.value.slice(-1);
    const invalidEnd = ['+', '-', '*', '/', '%'];
    if (invalidEnd.includes(lastChar)) {
      display.value = 'Error';
      return;
    }

    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function toggleScientific() {
  sci.classList.toggle('hidden');
}
