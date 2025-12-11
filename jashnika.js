function validateLogin() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("Please fill all fields");
        return false; 
    }

    
    if (email === "umangjaiswal@gmail.com" && pass === "0723") {
        alert("Login Successful!");
        window.location.href = "index.html"; 
        return false;
    } else {
        alert("Incorrect email or password!");
        return false;
    }
}