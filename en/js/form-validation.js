// for submitting in reset password
function validateNewPassword(){
  return PasswordSecurity() && checkpass();
}

// for submitting in register
function validate(){
  return checkFname() && checkLname() && checkPhone && validateNewPassword();
}



// phone number check
function checkPhone(event) {
  if(!checkKeyPress(event)) return;
  
  let select = document.getElementById("country");
  let phone = document.getElementById("phone").value;
  let isValid;

  // switch depending on country
  switch (select.value) {
    case "France":
      isValid = /^0[1-9](\d{2}){4}$/.test(phone);
      break;
    case "USA":
      isValid = /^\(?([2-9][0-8][0-9])\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/.test(phone);
      break;
    case "Lebanon":
      isValid = /^((03)|(81)|(70)|(71)|(76)|(78)|(79))\d{6}$/.test(phone);
      break;
    default:
      isValid = false;
  }

  // add error message
  if(isValid) 
    document.querySelector(".phone + .error").innerHTML = "";
  else 
    document.querySelector(".phone + .error").innerHTML = "phone number format is incorrect!";

  return isValid;
}



// first name check
function checkFname(event) {
  if(!checkKeyPress(event)) return;

  let fname = document.querySelector("#fname-field input").value;
  let isLetters = /[a-zA-Z]{3,}/.test(fname) && !(/\d/.test(fname));

  if(isLetters) 
    document.querySelector("#fname-field + .error").innerHTML = "";
  else 
    document.querySelector("#fname-field + .error").innerHTML = "first name must be of 3 or more letters!";

  return isLetters;
}



// last name check
function checkLname(event) {
  if(!checkKeyPress(event)) return;

  let lname = document.querySelector("#lname-field input").value;
  let isLetters = /[a-zA-Z]{3,}/.test(lname) && !(/\d/.test(lname));;

  if(isLetters) 
    document.querySelector("#lname-field + .error").innerHTML = "";
  else 
    document.querySelector("#lname-field + .error").innerHTML = "last name must be of 3 or more letters!";

  return isLetters;
}



//pass security
function PasswordSecurity(event) {
  if(!checkKeyPress(event)) return;

  var password = document.getElementById("pass").value;
  var hasUppercase = /[A-Z]/.test(password);
  var hasLowercase = /[a-z]/.test(password);
  var hasDigit = /\d/.test(password);
  var hasSymbol = /[^\w\s]/.test(password);
  var isLengthValid = password.length >= 8;

  // return if password meets the requirements
  if( hasUppercase && hasLowercase && hasDigit && hasSymbol && isLengthValid){
    document.querySelector("#password-field + .error").innerHTML = "";
    return true;
  }else{
    document.querySelector("#password-field + .error").innerHTML = "Your password does not meet our requirements!";
    return false;
  }
}



//check pass confirmation
function checkpass(event) {
  if(!checkKeyPress(event)) return;
  
  var x = document.getElementById("pass").value;
  var z = document.getElementById("cpass").value;

  if(z == x) {
    document.querySelector("#confirm-field + .error").innerHTML = "";
    return true;
  }else{
    document.querySelector("#confirm-field + .error").innerHTML = "passwords do not match!";
    return false;
  }
}



// listen to keyboard presses, not to give errors when we touch the arrows
function checkKeyPress(event){
  switch(event.key){
    case "ArrowUp": case "ArrowDown": 
    case "ArrowLeft": case "ArrowRight": 
      return false;
    default: return true;
  }
}