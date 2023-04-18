//check pass confirmation
function checkpass(){
  var x = document.getElementById("pass").value;
  var z = document.getElementById("cpass").value;

  if(z === x) return true;
  else{
    alert("Passwords do NOT match!");
    return false;
  }
}

//pass security
function PasswordSecurity() {
  var password = document.getElementById("pass").value;
  var hasUppercase = /[A-Z]/.test(password);
  var hasLowercase = /[a-z]/.test(password);
  var hasDigit = /\d/.test(password);
  var hasSymbol = /[^\w\s]/.test(password);
  var isLengthValid = password.length >= 8;

  //return if password meets the requirements
  if( hasUppercase && hasLowercase && hasDigit && hasSymbol && isLengthValid){
    return true;
  }else{
    alert("Your password does not meet our requirements!");
    return false;
  }
}

// phone number check
function changepattern() {
  var select = document.getElementById("country");
  var pattern = "";

  // switch depending on country
  switch (select.value) {
    case "France":
      pattern = "^0[1-9](\\d{2}){4}$";
      break;
    case "USA":
      pattern = "^\\(?([2-9][0-8][0-9])\\)?[-.\\s]?([2-9][0-9]{2})[-.\\s]?([0-9]{4})$";
      break;
    case "Lebanon":
      pattern = "^((03)|(81)|(70)|(71)|(76)|(78)|(79))\\d{6}$";
      break;
    default:
      pattern = "";
  }
  document.getElementById("phone").setAttribute("pattern", pattern);
}