const button = document.getElementById(
  'check');
const result = document.getElementById(
  'result');

function count(num) {
  num = num;
  factCount = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factCount++;
    }
  }
  return factCount;
}

button.addEventListener('click',
  function() {
    const value = parseInt(document
      .getElementById('input')
      .value);
    result.innerHTML = count(value);
  });