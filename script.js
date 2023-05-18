  document.getElementById("fbLogin").addEventListener("click", function(event) {
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("pass");
    var email = emailField.value;
    var password = passwordField.value;
    var isValid = true;

    if (email === "") {
      emailField.style.borderColor = "red";
      isValid = false;
    } else {
      emailField.style.borderColor = "";
    }

    if (password === "") {
      passwordField.style.borderColor = "red";
      isValid = false;
    } else {
      passwordField.style.borderColor = "";
    }

    if (!isValid) {
      alert("Please enter both email and password.");
      event.preventDefault();
    }
  });
