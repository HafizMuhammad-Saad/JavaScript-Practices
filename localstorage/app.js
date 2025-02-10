// Function to save the name
function saveName() {
    const nameInput = document.getElementById("nameInput"); // Get the input field
    const name = nameInput.value; // Get the value from the input field
    localStorage.setItem("userName1", name); // Save it to localStorage
    alert("Name saved!"); // Confirmation
}

// Function to display the name
function displayName() {
    const savedName = localStorage.getItem("userName1"); // Get the name from localStorage
    const displayName = document.getElementById("displayName"); // Get the paragraph element
    if (savedName) {
        displayName.textContent = `Hello, ${savedName}!`; // Show the saved name
    } else {
        displayName.textContent = "No name saved."; // Default message
    }
}

// Event listeners
document.getElementById("saveBtn").addEventListener("click", saveName);
window.addEventListener("load", displayName); // Run displayName when the page loads
