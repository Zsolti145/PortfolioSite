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
        error.text("Rossz email forátum!");
      }
    } else {
      error.text("Az email kötelező!");
    }
    return false;
  }

  function validateName() {
    let user = $("#username").val();
    let error = $("#nameError");

    if (user != "") {
      if (user.length < 6) {
        error.text("Túl rövid a név");
        return false;
      } else if (user.length > 30) {
        error.text("Túl hosszú a név");
        return false;
      } else {
        error.text("");
        return true;
      }
    } else {
      error.text("A név kötelező!");
      return false;
    }
    return false;
  }

  function validateTextarea() {
    let textarea = $("#texta").val();
    let error = $("#textareaError");

    if (textarea != "") {
      if (textarea.length < 6) {
        error.text("Túl rövid üzenet");
        return false;
      } else if (textarea.length > 255) {
        error.text("Túl hosszú üzenet");
        return false;
      } else {
        error.text("");
        return true;
      }
    } else {
      error.text("Az üzenetet kötelező kitölteni!");
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


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  });
