$(document).ready(function () {
  function emailValidate() {
    let email = $("#email").val();
    let error = $("#emailError");
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email !== "") {
      if (regex.test(email)) {
        error.text("");
        return true;
      } else {
        error.text("Wrong Email format!");
      }
    } else {
      error.text("Email is required!");
    }
    return false;
  }

  function validateName() {
    let user = $("#username").val();
    let error = $("#nameError");

    if (user != "") {
      if (user.length < 6) {
        error.text("Name is too short");
      } else if (user.length > 20) {
        error.text("Name is too long");
      } else {
        error.text("");
        return false;
      }
    } else {
      error.text("Name is required!");
      return false;
    }
    return false;
  }

  function validateTextarea() {
    let textarea = $("#texta").val();
    let error = $("#textareaError");

    if (textarea != "") {
      if (textarea.length < 6) {
        error.text("The message is too short");
      } else if (textarea.length > 255) {
        error.text("The message is too long");
      }else{
        error.text("");
        return false;
        }
    }else{
      error.text("Message is required");
      return false;
    }
    return false;
  }

  function validateAll() {
    let e = emailValidate();
    let n = validateName();
    let t = validateTextarea();
    return e && n && t;
  }

  $("#email").on("keyup blur", emailValidate);
  $("#username").on("keyup blur", validateName);
  $("#texta").on("keyup blur",validateTextarea);
  $("#regForm").on("submit", function (event) {
    if (!validateAll()) {
      event.preventDefault();
    }
  });

  function darkmode() {
    $("#darkmode").click(function () { 
      $("body").toggleClass("dark");
    });
  }

});
