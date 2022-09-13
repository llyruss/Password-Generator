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

// Arrays for character types
let charArray = []
let passwordArray = []
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

let numCharTypes = 0


function generatePassword() {

  let chosenCharLength = getCharLength()

  //prompt for lowercase
  let isLowercase = confirm("Do you want to include lowercase letters? Click OK for yes and cancel for no.")
  if (isLowercase === true) {
    isCharTypeSelected = true
    numCharTypes++
    //adding lowercase characters to final character array
    charArray = charArray.concat(lowercase)
    //adding one random lowercase charater to password array to ensure at least one lowercase letter is included 
    passwordArray.push(
      lowercase[Math.floor(Math.random() * 26)]
    )
    console.log(passwordArray)
  }


  //prompt for uppercase
  let isUppercase = confirm("Do you want to include uppercase letters? Click OK for yes and cancel for no.")
  if (isUppercase === true) {
    isCharTypeSelected = true
    numCharTypes++
    charArray = charArray.concat(uppercase)
    passwordArray.push(
      uppercase[Math.floor(Math.random() * 26)]
    )
  }

  //prompt for numerical characters
  let hasNumbers = confirm("Do you want to include numbers in your password? Click OK for yes and cancel for no.")
  if (hasNumbers === true) {
    isCharTypeSelected = true
    numCharTypes++
    charArray = charArray.concat(numbers)
    passwordArray.push(
      numbers[Math.floor(Math.random() * 10)]
    )
  }

  //prompt for special characters
  let hasSpecial = confirm("Do you want to special characters? Click OK for yes and cancel for no.")
  if (hasSpecial === true) {
    isCharTypeSelected = true
    numCharTypes++
    charArray = charArray.concat(special)
    passwordArray.push(
      special[Math.floor(Math.random() * special.length)]
    )
    console.log(passwordArray)

  }

  console.log(charArray)

  if (isCharTypeSelected === false) {
    alert("At least one character type must be selected.")
    generatePassword()
  } else {
    console.log("Character type chosen.")
  }

  //calculate number of character still needed for wardword array
  let remainCharNeeded = chosenCharLength - numCharTypes

  console.log(remainCharNeeded)

  for (let i = 0; i < remainCharNeeded; i++) {
    passwordArray.push(charArray[Math.floor(Math.random() * charArray.length)])
    console.log(passwordArray)
  }

  //randomly shuffle characters in passwordArray
  passwordArray = shuffleArray(passwordArray)
  console.log(passwordArray)

  //turn passwordArray into string
  let finalPassword = passwordArray.join("");

  console.log(finalPassword)

  return finalPassword

}

let isCharTypeSelected = false


let charLengthStr
let charLengthInt

function getCharLength() {
  //prompt for character length
  console.log("getCharLength")
  charLengthStr = prompt("Please choose how many characters you would like in your password. Choose a value between 8 and 128", "number of characters");
  charLengthInt = parseInt(charLengthStr)

  //validate charLength
  console.log(charLengthInt)

  if (isNaN(charLengthInt)) {
    alert("Invalid character type.")
    getCharLength()
  }
  console.log(charLengthInt)

  if (!(charLengthInt >= 8 && charLengthInt <= 128)) {
    alert("Invalid character length.")
    getCharLength()
  }
  console.log(charLengthInt)
  return charLengthInt
}

//shuffling function borrowed from https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {

    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
