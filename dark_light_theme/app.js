var body = document.getElementById('body');
var modeBtn = document.getElementById('modeBtn');

if (localStorage.getItem('mode') === 'dark mode') {
    body.classList.add('darkBody');
    modeBtn.textContent = 'Light Mode';
}
function changeMode() {
    body.classList.toggle('darkBody');
    var isDark = body.classList.contains('darkBody');
    modeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode'; 
    localStorage.setItem('mode', isDark ? 'dark mode' : 'light mode');
}











// function setName() {
//     localStorage.setItem('name', prompt('name'));
    
// }

// function getName() {
//    var storedname =  localStorage.getItem('name')
//    var name = document.createElement('h1')
//    name.innerHTML = storedname;
//    body.appendChild(name);
//     console.log(storedname);
//     document.getElementsByTagName('body').innerHTML += storedname
// }


// var switchMode = document.getElementById('switchMode');

// function changeMode() {
//     localStorage.setItem('modelight', 'light');
//     localStorage.setItem('modedark', 'dark');
//         var setMode = localStorage.getItem('modedark')
//         if ( setMode === 'dark' && switchMode.checked ) {
//             body.className = 'darkBody';
//     }  else {
//         body.className = 'lightBody';
//     }
// }

// function checkMode() {
//     var setMode = localStorage.getItem('mode')
//     if (setMode === 'dark') {
//         changeMode()
//     } else if (setMode === 'light') {
//         changeMode()
//     }
// }

// window.onload = checkMode;



// function darkMode() {
//     localStorage.setItem('mode', 'dark');
//     var setMode = localStorage.getItem('mode')
//     if ( setMode === 'dark' ) {
//         body.className = 'darkBody';

// }
// }
// function lightMode() {
//     localStorage.setItem('mode', 'light');
//     var setMode = localStorage.getItem('mode')
//     if (setMode === 'light') {
//         body.className = 'lightBody';
//     }
// }

// function checkMode() {
//     var setMode = localStorage.getItem('mode')
//     if (setMode === 'dark') {
//         darkMode()
//     } else if (setMode === 'light') {
//         lightMode()
//     }
// }

// window.onload = checkMode;


