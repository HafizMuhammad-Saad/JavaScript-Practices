function signUp() {
    var emailSignup = document.getElementById('email2').value; // Get signup email
    var passwordSignup = document.getElementById('password2').value; // Get signup password
  var userName = document.getElementById('userName').value; // Get user name

    // Check if both fields are filled
    if (emailSignup === "" || passwordSignup === "" || userName === "") {
      Swal.fire({
        title: "Error",
        text: "Please fill in both email and password fields!",
        icon: "error"
      });
      return;
    }
  
    // Save the email and password in localStorage
    localStorage.setItem('userEmail', emailSignup);
    localStorage.setItem('userPassword', passwordSignup);
    localStorage.setItem('username', userName);
    
  
    Swal.fire({
      title: "Sign-Up Successful",
      text: "Your details have been saved!",
      icon: "success"
    });
  }
  
  // Function to handle login
  function login() {
    var emailLogin = document.getElementById('email1').value; // Get login email
    var passwordLogin = document.getElementById('password1').value; // Get login password

   
  
    // Retrieve stored email and password from localStorage
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');
  
    // Check if entered credentials match the stored ones
    if (emailLogin === storedEmail && passwordLogin === storedPassword) {
      location.href = 'welcome.html'; // Redirect on successful login
      
    } else {
      Swal.fire({
        title: "Invalid Email or Password",
        text: "Please enter correct credentials.",
        icon: "error"
      });
    }
  }




  var body = document.querySelector('body');
var modeBtn = document.getElementById('modeBtn');

if (localStorage.getItem('mode') === 'dark mode') {
    body.classList.add('dark-theme');
    modeBtn.textContent = 'Light Mode';
    modeBtn.checked = true;
}
function changeMode() {
    body.classList.toggle('dark-theme');
    var isDark = body.classList.contains('dark-theme');
    modeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode'; 
    localStorage.setItem('mode', isDark ? 'dark mode' : 'light mode');
  }


  