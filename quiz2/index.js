function signUp() {
    var emailSignup = document.getElementById('email2').value; // Get signup email
    var passwordSignup = document.getElementById('password2').value; // Get signup password
  var userName = document.getElementById('userName').value; // Get user name

  var emailRegex = /^\S+@\S+\.\S+$/
  var nameRegex = /^[a-zA-Z]+$/;
  

  if (nameRegex.test(userName)) {
    if (emailRegex.test(emailSignup)) {
      if (passwordSignup) {
        // Save the email and password in localStorage
        localStorage.setItem('userInfo', JSON.stringify({
          email: emailSignup,
          password: passwordSignup,
          name: userName,
        }))
        alertSweet("success", "you have successfully signed up", "success")
      }
    } else {
      alertSweet("Error", "Invalid email format!", "error");
    }

  } else {
    alertSweet("Error", "Name should only contain alphabetic characters!", "error");
    // return;
  }

    // if (emailSignup === "" || passwordSignup === "" || userName === "") {
    //   Swal.fire({
    //     title: "Error",
    //     text: "Please fill in both email and password fields!",
    //     icon: "error"
    //   });
    //   return;
    // }

  
    // localStorage.setItem('userEmail', emailSignup);
    // localStorage.setItem('userPassword', passwordSignup);
    // localStorage.setItem('username', userName);
    
  
  //   Swal.fire({
  //     title: "Sign-Up Successful",
  //     text: "Your details have been saved!",
  //     icon: "success"
  //   });
  }
  
  function alertSweet(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
    
  }
  // Function to handle login
  function login() {
    var emailLogin = document.getElementById('email1').value; // Get login email
    var passwordLogin = document.getElementById('password1').value; // Get login password

   
  
    // Retrieve stored email and password from localStorage
    // var storedEmail = localStorage.getItem('userEmail');
    // var storedPassword = localStorage.getItem('userPassword');
    var userInfo =JSON.parse( localStorage.getItem('userInfo'));
    
  if (emailLogin === userInfo.email) {
   if (passwordLogin === userInfo.password) {
    alertSweet("Success", "You have successfully logged in", "success")
    localStorage.setItem('username', userInfo.name);
    location.href = 'welcome.html'; // Redirect on successful login
   } else {
    alertSweet("Invalid Password", "Please enter your valid password", "error")
   }
  } else {
   alertSweet("Invalid Email", "Please enter your valid email", "error") 

  }

    // Check if entered credentials match the stored ones
  //   if (emailLogin === storedEmail && passwordLogin === storedPassword) {
  //     location.href = 'welcome.html'; // Redirect on successful login
      
  //   } else {
  //     Swal.fire({
  //       title: "Invalid Email or Password",
  //       text: "Please enter correct credentials.",
  //       icon: "error"
  //     });
  //   }
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
