function $(s) {
  //s= "#valami" -> id
  //s=".valami" -> class
  //s= "valami" -> name
  switch (s[0]) {
    case "#":
      let id = s.substr(1);
      return document.getElementById(id);
      break;
    case ".":
      let _Class = s.substr(1);
      return document.getElementsByClassName(_Class);
      break;
    default:
      return document.getElementsByName(s);
      break;
  }
}

function emailValdiate() {
  let email = $("#email").value;
  let error = $("#emailError");
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email != ""){
    if(regex.test(email)){
     error.innerHTML ="";
     return true;
    }else{
      error.innerHTML ="Wrong Email format!";
    }
}else
  error.innerHTML ="Email is required!";

return false;
}

function validateName() {
  let user = $("#username").value;
  let error = $("#nameError");

  if(user !=""){
     if(user.length < 6){
     error.innerHTML ="Name is too short";
     }else if(user.length > 20){
    error.innerHTML ="Name is too long";
     }else{
    error.innerHTML ="";
  return true;
     }
  }else{
    error.innerHTML = "Name is required!";
  }
  
}
function validateAll(){
  let e = emailValdiate();
  let n = validateName();
   
return e && n;
}

