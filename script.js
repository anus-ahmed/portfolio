setInterval(function(){
    let bolt = document.getElementsByClassName('fa-bolt')[0];
    if(bolt.classList.contains('bolt-green')){
        bolt.classList.remove('bolt-green');
        bolt.classList.add('bolt-red');
    }
    else if(bolt.classList.contains('bolt-red')){
        bolt.classList.remove('bolt-red');
        bolt.classList.add('bolt-green');
    }
}, 1000);

function checkTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.className += 'darkMode';
        document.getElementById('themeSwitcher').checked = true;
        document.getElementById('titleName').className += " gradient-heading";
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.className += 'lightMode';
        document.getElementById('themeSwitcher').checked = false;
        document.getElementById('titleName').classList.remove("gradient-heading");
    }
};

function changeTheme(){
    if(document.getElementById('themeSwitcher').checked){
        document.body.className = 'darkMode';
        document.getElementById('titleName').className += " gradient-heading";
    }
    else{
        document.body.className = 'lightMode';
        document.getElementById('titleName').classList.remove("gradient-heading");
    }
};

window.onload = checkTheme;
document.getElementById('themeSwitcher').onclick = changeTheme;
