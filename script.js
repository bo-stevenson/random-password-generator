// Assignment Code

let generateBtn = document.querySelector("#generate");
let numbers = "0123456789";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let uppercaseConfirm = false;
let lowercaseConfirm = false;
let specialConfirm = false;
let numConfirm = false;
let finalProduct = "";



function generatePassword()
{
  
  passwordLength = prompt("How many characters would you like in your password?");
    if (passwordLength < 8 || passwordLength > 128) 
    {
      alert("Please enter between 8 and 128 characters.");
    } else {
      let allowed = "";
      uppercaseConfirm = confirm("Would you like upper case letters?");
      lowercaseConfirm = confirm("Would you like lower case letters?");
      numConfirm = confirm("Would you like numbers?");
      specialConfirm = confirm("Would you like special characters?");

      if(uppercaseConfirm === true)
      {
        allowed += uppercase;

      }

      if(lowercaseConfirm === true)
      {
        allowed += lowercase;
        
      }

      if(specialConfirm === true)
      {
        allowed += specialCharacters;
        
      }

      if(numConfirm === true)
      {
        allowed += numbers;
        
      }
        
      for(i=0; i < passwordLength; i++)
      {
        var random = Math.floor(Math.random() * allowed.length);
        
        finalProduct += allowed[random];
      }
        
        
    }

return finalProduct;

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