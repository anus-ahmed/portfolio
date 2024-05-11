function checkTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.className += 'darkMode';
        document.getElementById('themeSwitcher').checked = true;
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.className += 'lightMode';
        document.getElementById('themeSwitcher').checked = false;
    }
};

function changeTheme(){
    if(document.getElementById('themeSwitcher').checked){
        document.body.className = 'darkMode';
    }
    else{
        document.body.className = 'lightMode';
    }
}

window.onload = checkTheme;
document.getElementById('themeSwitcher').onclick = changeTheme;
