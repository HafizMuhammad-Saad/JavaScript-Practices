async function checkSession() {
    try {
        const { data, error } = await supabase.auth.getSession()
        if (error) {
            console.log(error);
            
        }
        const {session} = data; 


        const currentPage = window.location.pathname;
        const publicPages = ['/login.html', '/index.html', '/']

        if(!session && !publicPages.some(page => page.includes(currentPage))) {
            location.href = '/index.html';
            return;
            
        } 
         if (session && publicPages.includes(currentPage)) {
            console.log("not logged in");
            console.log(currentPage);
            console.log(session);
            window.location.href = '/dashboard.html';
        }
       
    } catch (error) {
        console.log(error);
        
    }
}


document.addEventListener('DOMContentLoaded', checkSession);

export async function USERDETAILS() {
    console.log('user...');

    try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            console.warn("No user is logged in!");
            return;
          }


        if (user) {
            console.log("User from supabase.auth.getUser:",user);
            try {
                const { data, error} = await supabase
                .from('users')
                .select('name, email, id, profileImage')
                .eq('userId', user.id)

                if (data) { 
                    console.log('data',data);
                    let currentUser = {
                        name: data[0].name,
                        userId: user.id,
                        id: data[0].id,
                        email: data[0].email,
                        profileImage: data[0].profileImage
                    }
                    console.log("currentUser set in localStorage:", currentUser);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    console.log("User details saved to localStorage.");
                } 

                if (error) {
                    console.log(error);
                }

            } catch (error) {
                console.log(error);
                
            }
            
        }
    } catch (error) {
        console.log(error);
        
    }
    
}

window.onload = USERDETAILS
// window.onload = async () => {
//     console.log('page loaded');
    
//     await USERDETAILS();
// }

