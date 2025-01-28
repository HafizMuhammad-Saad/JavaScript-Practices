import { USERDETAILS } from './app.js';


let fullName = document.getElementById('fullname')
let signupEmail = document.getElementById('email')
let signupPass = document.getElementById('password')
let signupBtn = document.getElementById('signup-btn')
let signupBtnLoader = document.getElementById('loading_btn_spinner')
let loginBtn = document.getElementById('login-btn')
let loginEmail = document.getElementById('email-login')
let loginPass = document.getElementById('password-login')
let sessionBtn = document.getElementById('session_btn')
let logoutBtn = document.getElementById('logout_btn')
let googleLoginBtn = document.getElementById('google-login-btn') 
let googleSignupBtn = document.getElementById('google-signup')

let fileInput = document.getElementById('profile-image')

let pimage = document.getElementById('profileImage')


async function signupWithGoogle() {
  try {
   const { data, error } = await supabase.auth.signInWithOAuth({
       provider: 'google',
      //  redirectTo: '/dashboard.html'
     })
     if (error) throw error;

     
     if (data) {
       Swal.fire({
           title: "Sign in!",
           text: "Google Sign in successfully",
           icon: "success"
         });        
         window.location.href = '/dashboard.html'
     }
  } catch (error) {
   console.log(error + 'No user found');
   
  }
}
if (googleSignupBtn) {
  googleSignupBtn.addEventListener("click", signupWithGoogle)
}


async function signup() {
  try {
    signupBtnLoader.style.display = 'block'
    const { data, error } = await supabase.auth.signUp({
        email: signupEmail.value,
        password: signupPass.value,
      })

      
    if(error) throw error 
    if(data) {
        alert('Please Check your email for confirmation')
        console.log(data.user.id);

        const file = fileInput.files[0];
        console.log(file);
        
        let profileImageUrl = null;

        if (file) {
          const {data: uploadData, error: uploadError} = await supabase.storage
           .from('usersProfiles')
            .upload(`public/${data.user.id}/${file.name}`, file, {
              cacheControl: '3600',
              upsert: false
            });
            
            console.log('File Uploaded:', uploadData);

          if (uploadError) throw uploadError;
          if (uploadData) {
            console.log(uploadData);
            const {data: publicUrlData, error: publicUrlError} = await supabase.storage
            .from('usersProfiles')
            .getPublicUrl(`public/${data.user.id}/${file.name}`)
            
            console.log('Public URL Data:', publicUrlData);
            console.log('Public URL Error:', publicUrlError);

            if (publicUrlError) throw publicUrlError;
            profileImageUrl = publicUrlData.publicUrl;
            console.log('Generated Public URL:', profileImageUrl);

          }

            
          }


        try {
          const { data: userData, error: userError } = await supabase
  .from('users')
  .insert({ 
    userId: data.user.id, 
    email: signupEmail.value,
    name: fullName.value, 
    profileImage: profileImageUrl
  })
  .select();

  if (userError) {
    console.log(userError.message);
    
  };
  if (userData) {
    console.log(userData);
    // await USERDETAILS();

  }

        } catch (error) {
          console.log(error);
          
        }
        
    }
    return data
  } catch (error) {
    console.log(error)
  } finally {
    signupBtnLoader.style.display = 'none'
  }
      
}


async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPass.value,
          })
          
          if(error) throw error
          if(data) {
              console.log(data)
              // alert('Sign in Succesfull')
              await USERDETAILS()
              
              window.location.href = 'dashboard.html'
            }
            return data
        } catch (error) {
            console.log(error)
            
            alert(error.message)
        }
    }

    async function logout() {
      try {
        const {error} = await supabase.auth.signOut();
        if (error) throw error

        localStorage.removeItem("currentUser");


        window.location.href = '/login.html'
      } catch (error) {
        console.log(error);
        
      }
    }

    async function loginWithGoogle() {
      try {
       const { user, session, error } = await supabase.auth.signInWithOAuth({
           provider: 'google',
          //  redirectTo: 'http://127.0.0.1:5500/dashboard.html'
         })
         if (error) throw error;
   
         if (user) {
           alert("Google Sign In Successfully" + user.email)
           
         }
      } catch (error) {
       console.log(error + 'No user found');
       
      }
   }
  
   if (googleLoginBtn) {
     googleLoginBtn.addEventListener("click", loginWithGoogle)
    
   }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', logout)
    }

    if(loginBtn) {
        loginBtn.addEventListener('click' , login)
      
      }

    if(signupBtn) {
        signupBtn.addEventListener('click' , signup)
      }