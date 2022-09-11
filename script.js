// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  getCharLength()

  // //prompt for lowercase
  // let isLowercase= confirm("Do you want to include lowercase letters? Click OK for yes and cancel for no.")

  // //prompt for uppercase
  // let isUppercase= confirm("Do you want to include uppercase letters? Click OK for yes and cancel for no.")

  // //prompt for numerical characters
  // let hasNumbers= confirm("Do you want to include numbers in your password? Click OK for yes and cancel for no.")

  // //prompt for special characters
  // let hasSpecial= confirm("Do you want to special characters? Click OK for yes and cancel for no.")

}

function getCharLength() {
  //prompt for character length
  let charLengthStr = prompt("Please choose how many characters you would like in your password. Choose a value between 8 and 128", "number of characters");
  let charLengthInt =   parseInt(charLengthStr)
 
  //validate charLength
  console.log(charLengthInt)

  if(isNaN(charLengthInt)){
    alert("Invalid character length.")
    charLengthStr = prompt("Please choose how many characters you would like in your password. Choose a value between 8 and 128", "number of characters");
    charLengthInt =   parseInt(charLengthStr)
  }
    console.log(charLengthInt)

  if(!(charLengthInt >=8 && charLengthInt <=128)) {
    alert("Invalid character length.")
    charLengthStr = prompt("Please choose how many characters you would like in your password. Choose a value between 8 and 128", "number of characters");
    charLengthInt =   parseInt(charLengthStr)
  }
    console.log(charLengthInt)
  return charLengthInt

}

