function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculateResult() {
  let expression = document.getElementById('display').value;
  try {
    let result = eval(expression);
    document.getElementById('display').value = result;
  } catch (e) {
    alert('Invalid Expression');
  }
}
