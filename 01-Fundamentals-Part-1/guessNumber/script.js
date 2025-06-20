let secretNumber=Math.floor((Math.random() * 100)) +1;

let guess;

while (guess !== secretNumber){

 console.log(guess=parseInt(prompt("Guess a number between 1 and 100")));

 if (isNaN(guess) || guess < 1 || guess > 100){
  alert("please enter valid number between 1 and 100");
 }
  if (guess < secretNumber){
    alert("To low")
  } else if(guess > secretNumber){
    alert("To heigh");
  }else {
    alert("Great You guess the Number " + guess);
  }
}