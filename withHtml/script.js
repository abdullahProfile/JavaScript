function addition() {
  let numOne = document.getElementById("firstNumber").value;
  let numTwo = document.getElementById("SecondNumber").value;

  let result = Number(numOne) + Number(numTwo);

  document.getElementById("result").innerText = "Result: " + result;
}

function subtraction() {
  let numOne = document.getElementById("firstNumber").value;
  let numTwo = document.getElementById("SecondNumber").value;

  let result = Number(numOne) - Number(numTwo);

  document.getElementById("result").innerText = "Result: " + result;
}

function multiplication() {
  let numOne = document.getElementById("firstNumber").value;
  let numTwo = document.getElementById("SecondNumber").value;

  let result = Number(numOne) * Number(numTwo);

  document.getElementById("result").innerText = "Result: " + result;
}