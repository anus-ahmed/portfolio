var uiContainer = document.getElementById('projects');

const projects = [
    {
        "year": "in-development",
        "title": "UBL Retail Web Application",
        "descr": "lorem ipsum dolor sit amet",
        "urltitle": "google.com",
        "url": "https://www.google.com/"
    },
    {
        "year": 2024,
        "title": "Ontario Student Funding",
        "descr": "I have designed and developed the landing page for this website, ensuring full responsiveness across various devices.",
        "urltitle": "ontariostudentfunding.com",
        "url": "https://ontariostudentfunding.com/"
    },
    {
        "year": 2023,
        "title": "Foodster Club",
        "descr": "I've successfully crafted the entire frontend of this web application based on wireframes, ensuring responsiveness across various devices. Bootstrap, SCSS, and other frontend technologies were leveraged to achieve this outcome.",
        "urltitle": "foodster.club",
        "url": "https://portal.foodster.club/"
    },
    {
        "year": 2022,
        "title": "The A-Lyst",
        "descr": "This refined ecommerce store has been meticulously crafted on the Shopify platform, integrating the default Dawn theme and featuring customized product and collections pages.",
        "urltitle": "the-a-lyst.myshopify.com",
        "url": "https://the-a-lyst.myshopify.com/"
    },
    {
        "year": 2022,
        "title": "Kuchen Kompane",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "kuchenkompane.de",
        "url": "https://kuechenkompane.de/"
    },
    {
        "year": 2022,
        "title": "Kyle Jackie Haircare",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "kylejackiehaircare.com",
        "url": "https://www.kylejackiehaircare.com"
    },
    {
        "year": 2022,
        "title": "Before 7am",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "before7am.co",
        "url": "https://before7am.co/"
    }
]
projects.forEach(listProjects);

function listProjects(item, index) {
    uiContainer.innerHTML += "<div class='project-details'><div class='proj-title'><h3 class='font-barlow h3 fw-800' >" + item.title + "</h3><span class='font-shareTech p3 fw-400 badge'>" + item.year + "</span></div><p class='font-shareTech p3 fw-400'>" + item.descr + "</p><a href='" + item.url + "' class='font-shareTech p3 fw-500 link-colored' target='blank'>" + item.urltitle + "&nbsp;&nbsp;<i class='fa-solid fa-arrow-right'></i></a>";
};

function checkTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.className += 'darkMode';
        document.getElementById('checkbox').checked = true;
        document.getElementById('titleName').className += " gradient-heading";
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.className += 'lightMode';
        document.getElementById('checkbox').checked = false;
        document.getElementById('titleName').classList.remove("gradient-heading");
    }
};

window.onload = checkTheme;

function changeTheme() {
    if (document.getElementById('checkbox').checked) {
        document.body.className = 'darkMode';
        document.getElementById('titleName').className += " gradient-heading";
    }
    else {
        document.body.className = 'lightMode';
        document.getElementById('titleName').classList.remove("gradient-heading");
    }
};

document.getElementById('checkbox').onclick = changeTheme;
