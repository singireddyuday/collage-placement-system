// Object to store student details based on username
const students = {
    john_doe: {
        name: "John Doe",
        fatherName: "Mr. Doe Sr.",
        phoneNumber: "+1234567890",
        year: "3",
        branch: "Computer Science",
        section: "A",
        placementPosition: "TBD",
        githubUsername: "john_doe",
        linkedinProfile: "linkedin.com/in/johndoe"
    },
    jane_smith: {
        name: "Jane Smith",
        fatherName: "Mr. Smith Sr.",
        phoneNumber: "+9876543210",
        year: "2",
        branch: "Electrical Engineering",
        section: "B",
        placementPosition: "Intern",
        githubUsername: "jane_smith",
        linkedinProfile: "linkedin.com/in/janesmith"
    }
    // Add more students as needed
};

// Function to update student details based on the logged-in username
function updateStudentDetails(username) {
    const student = students[username];
    if (student) {
        document.getElementById("studentName").textContent = student.name;
        document.getElementById("fatherName").textContent = student.fatherName;
        document.getElementById("phoneNumber").textContent = student.phoneNumber;
        document.getElementById("year").textContent = student.year;
        document.getElementById("branch").textContent = student.branch;
        document.getElementById("section").textContent = student.section;
        document.getElementById("placementPosition").textContent = student.placementPosition;
        document.getElementById("githubUsername").textContent = student.githubUsername;
        document.getElementById("linkedinProfile").textContent = student.linkedinProfile;

        // Show the student details container
        document.getElementById("studentDetails").style.display = "block";
    } else {
        console.error("Student not found.");
    }
}

// Example: Call updateStudentDetails with a specific username (replace 'john_doe' with the actual username)
updateStudentDetails('john_doe');

// Function to create a notification (replace this with your actual notification logic)
function openschedule() {
    window.open("Placementschedule.pdf", "_blank");
}

// Function to open the resume (replace this with your actual logic for opening a resume)
function openResume() {
    // Example: Open a PDF file (replace 'path/to/resume.pdf' with the actual path)
    window.open("resume.pdf", "_blank");
}

// Function to show a notice (replace this with your actual notice logic)
function showNotification() {
    alert("Important notice: Classes are canceled tomorrow.");
}
