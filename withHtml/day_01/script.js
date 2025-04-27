function addText() {
  let userInput = prompt("Enter your paragraph:");
  if (userInput) {
    let para = document.createElement("p");
    para.textContent = userInput;
    document.getElementById("container").appendChild(para);
  }
}