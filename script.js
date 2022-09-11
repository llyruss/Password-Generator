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

  let chosenCharLength=getCharLength()

  //prompt for lowercase
  let isLowercase= confirm("Do you want to include lowercase letters? Click OK for yes and cancel for no.")
    if(isLowercase===true) {
      isCharTypeSelected = true
    }

  //prompt for uppercase
  let isUppercase= confirm("Do you want to include uppercase letters? Click OK for yes and cancel for no.")
    if(isUppercase===true){
      isCharTypeSelected = true
    }

  //prompt for numerical characters
  let hasNumbers= confirm("Do you want to include numbers in your password? Click OK for yes and cancel for no.")
if(hasNumbers===true){
  isCharTypeSelected = true
}

  //prompt for special characters
  let hasSpecial= confirm("Do you want to special characters? Click OK for yes and cancel for no.")
  if(hasSpecial===true){
  isCharTypeSelected = true
}
if(isCharTypeSelected===false){
alert("At least one character type must be selected.")
generatePassword()
}else {
  console.log("Character type chosen.")}

}

let isCharTypeSelected = false


let charLengthStr
let charLengthInt

function getCharLength() {
  //prompt for character length
  console.log("getCharLength")
  charLengthStr = prompt("Please choose how many characters you would like in your password. Choose a value between 8 and 128", "number of characters");
  charLengthInt =   parseInt(charLengthStr)
 
  //validate charLength
  console.log(charLengthInt)

  if(isNaN(charLengthInt)){
    alert("Invalid character type.")
    getCharLength()
  }
    console.log(charLengthInt)

  if(!(charLengthInt >=8 && charLengthInt <=128)) {
    alert("Invalid character length.")
    getCharLength()
  }
    console.log(charLengthInt)
  return charLengthInt
}
