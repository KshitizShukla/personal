function validateForm() {
    var email = document.forms["login"]["email"].value;
    var password = document.forms["login"]["password"].value;
    if (email == "") {
        alert("Please enter your email.");
        return false;
    } else if (password == "") {
        alert("Please enter your password.");
        return false;
    } else {
        // Call a function to validate the email and password
        if (validateEmail(email) && validatePassword(password)) {
            alert("Login successful!");
            return true;
        } else {
            alert("Invalid email or password.");
            return false;
        }
    }
}

function validateEmail(email) {
    // Use a regular expression to validate the email format
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    // Validate the password length
    return password.length >= 8;
}
