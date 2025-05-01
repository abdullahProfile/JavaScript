function handleSubmit() {
  const userName = document.getElementById("name").value;
  const userPassword = document.getElementById("pass").value;

  let arr;
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(userName)){
    alert("Please Enter correct Name only in letters")
  }
  else if (isNaN(userPassword) || userName === "") {
    alert("Enter correct password");
  }
  else {
    alert("Form submitted successfully");
  }
  arr={userName,userPassword};
  console.log(arr);
}
