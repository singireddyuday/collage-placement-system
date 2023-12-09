// Define predefined username and password
const predefinedUsername = "praveen";
const predefinedPassword = "maya";

function login() {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if entered credentials match predefined credentials
    if (username === predefinedUsername && password === predefinedPassword) {
        // Store username in sessionStorage
        sessionStorage.setItem("username", username);

        // Redirect to welcome page
        window.location.href = "admin.html";
    } else {
        alert("Invalid username or password");
    }
}
