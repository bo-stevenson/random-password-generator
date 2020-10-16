// Assignment Code

let generateBtn = document.querySelector("#generate");
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword()
{
  passwordLength = prompt("How many characters would you like in your password?");
    if (passwordLength < 8) 
    {
      alert("Please enter more than 8 characters.");
    } else uppercaseConfirm = confirm("Would you like upper case letters?");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* ask pass length

ask for uppercase characters
 
ask for lower case characters 

ask for special characters

output password 

*/