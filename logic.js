
const arr = [];

function calculateAverage(array) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
      num = array[i];
  }
  return num;
}

function demo(rating) {
  arr.push(rating);
  const newValue = calculateAverage(arr);
  document.getElementById("demo").innerText = newValue;
}