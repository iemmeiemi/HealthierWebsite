$(function () {
  $("#erroremail").hide();
  $("#errorpass").hide();
  var error_name = false;
  var error_username = false;
  var error_email = false;
  var error_pass = false;
  var error_conpass = false;
  var password_label = $('.password-label');
  var email_label = $('.email-label');

  $("#form_email").focusout(function () {
    checkEmail();
  });
  $("#form_pwd").focusout(function () {
    checkPass();
  });

  function checkEmail() {
    var pattern = new RegExp(
      /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    );
    if (pattern.test($("#form_email").val())) {
      $("#erroremail").hide(400);
      email_label.show();
    } else {
      $("#erroremail").html("Invalid email address");
      $("#erroremail").show(300);
     
      error_email = true;
    }
  }

  function checkPass() {
    var password = $("#form_pwd").val();
   
    console.log(password.length);
    if (password.length<8) {
      $("#errorpass").html("At least 8 characters");
      $("#errorpass").show(300);
      error_pass = true;
    } else {
      $("#errorpass").hide(400);
      password_label.show();
      $("#forgot-pw-link").css("text-align", "left");

    }
  }

  //form submit
  $("#reg_form").submit(function () {
    error_name = false;
    error_username = false;
    error_email = false;
    error_pass = false;
    error_conpass = false;
    checkEmail();
    checkPass();

    if (
      error_name == false &&
      error_username == false &&
      error_email == false &&
      error_pass == false &&
      error_conpass == false
    ) {
      return true;
    } else {
      return false;
    }
  });
});
