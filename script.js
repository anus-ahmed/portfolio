function checkTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.className += 'darkMode';
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.className += 'lightMode';
    }
}

window.onload = checkTheme;
