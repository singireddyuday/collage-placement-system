// Define predefined admin username and password
const adminUsername = "admin";
const adminPassword = "admin123";

function adminLogin() {
    event.preventDefault();

    var enteredAdminUsername = document.getElementById("adminUsername").value;
    var enteredAdminPassword = document.getElementById("adminPassword").value;

    // Check if entered credentials match predefined admin credentials
    if (enteredAdminUsername === adminUsername && enteredAdminPassword === adminPassword) {
        // Redirect to the admin dashboard or perform other actions
        window.location.href = "adminmain.html";
    } else {
        alert("Invalid admin username or password");
    }
}
