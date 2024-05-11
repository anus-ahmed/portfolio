function checkTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('darkMode');
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('lightMode');
    }
}

window.onload = checkTheme;
