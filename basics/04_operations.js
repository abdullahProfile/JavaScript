/*
Operations
1: additon +
2: multiplication *
3: Division /
4:Power **
5: Reminder %
6: Subtraction
*/

const prompt = require('prompt-sync')();

/*
why we use (prompt-sync())

require('prompt-sync') : bring the prompt-sync code into your file.

():immediately call it to create a working prompt function.

const prompt = save that working prompt function into the name prompt.
*/

let numOne= prompt("Enter first Number: ");
let Oparator= prompt("Enter Oparator like: (+ : - : / : * : ** : %: ");
let numTwo=prompt("Enter Second Number: ")

let result="";
if(Oparator==="+"){
  result=Number(numOne) + Number (numTwo);
  console.log(result);
}
else if (Oparator==="-"){
  result=Number(numOne) - Number (numTwo);
  console.log(result);
}
else if (Oparator==="*"){
  result=Number(numOne) * Number (numTwo);
  console.log(result);
}
else if (Oparator==="*"){
  result=Number(numOne) ** Number (numTwo);
  console.log(result);
}
else if (Oparator === "/") {
  if(numTwo == "0"){
    console.log("undefined")
  }else {
    result=Number(numOne) / Number (numTwo);
    console.log(result);
  }
}
else {
  result=Number(numOne) % Number (numTwo);
  console.log(result);
}