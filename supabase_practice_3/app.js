// async function checkSession() {
//     try {
//         const { data, error } = await supabase.auth.getSession()
//         if (error) {
//             console.log(error);
            
//         }
//         const {session} = data; 


//         const currentPage = window.location.pathname;
//         const publicPages = ['/login.html', '/index.html', '/']

//         if(!session && !publicPages.includes(currentPage)) {
//             location.href = '/index.html';
//             return;
            
//         } 
//          if (session && publicPages.includes(currentPage)) {
//             console.log("not logged in");
//             console.log(currentPage);
//             console.log(session);
//             window.location.href = '/dashboard.html';
//             greeting();
//         }
       
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// // 1. Display "Hello, User!" after Login
//  async function greeting() {
    
//     try {
//         const { data, error } = await supabase.auth.getSession()
//         if (error) throw error
//     const {session} = data       
//         document.getElementById('hello-user').innerText = `Hello, ${session.user.email}!`;
        
//     } catch (error) {
//         console.log(error);
        
   
//     }
//  }
// <<<<<<< HEAD
// if (location.pathname === '/dashboard.html') {
//     greeting()
//  }
// =======
// >>>>>>> 66687fd5e81dac7fcd2188c82b447548fe7c39de

// document.addEventListener('DOMContentLoaded', checkSession);

async function USERDETAILS() {
    console.log('user...');

    try {
        const { data: { user }, error } = await supabase.auth.getUser()


        if (user) {
            console.log("User from supabase.auth.getUser:",user);
            try {
                const { data, error: fetchError } = await supabase
                .from('users')
                .select('name', 'email', 'id')
                .eq('userId', user.id)

                if (data) { 
                    console.log('data',data);
                    let currentUser = {
                        name: data[0].name,
                        userId: user.id,
                        id: data[0].id,
                        email: data[0].email
                    }
                    console.log("currentUser set in localStorage:", currentUser);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));

                } else {
                    console.log("No user data found in the database.");

                }

            } catch (fetchError) {
                console.log(fetchError);
                
            }
            
        }
    } catch (error) {
        console.log(error);
        
    }
    
}


window.onload = USERDETAILS;

