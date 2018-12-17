$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var phoneNumberInput = $("input#phoneNumber-input");

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(emailInput, passwordInput, phoneNumberInput) {
    $.post("/api/signup", {
      email: emailInput,
      password: passwordInput,
      phoneNumber: phoneNumberInput
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      phoneNumber: phoneNumberInput.val().trim()
    };
    console.log(userData.phoneNumber);
    if (!userData.email || !userData.password) {
      return;
    } else {
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.phoneNumber);
      emailInput.val("");
      console.log(emailInput.val(""));
      passwordInput.val("");
      phoneNumberInput.val("");
      console.log(phoneNumberInput.val(""));
    }
  });

});
