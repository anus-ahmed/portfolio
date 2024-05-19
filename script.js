var uiContainer = document.getElementById('projects');

const projects = [
    {
        "year": "In-development",
        "title": "UBL Retail Web Application",
        "descr": "lorem ipsum dolor sit amet",
        "urltitle": "google.com",
        "url": "https://www.google.com/"
    },
    {
        "year": 2022,
        "title": "Foodster Club",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "google.com",
        "url": "https://www.google.com/"
    },
    {
        "year": 2022,
        "title": "The A-Lyst",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "google.com",
        "url": "https://www.google.com/"
    },
    {
        "year": 2022,
        "title": "Kuchen Kompane",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "google.com",
        "url": "https://www.google.com/"
    },
    {
        "year": 2022,
        "title": "Kyle Jackie Haircare",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "google.com",
        "url": "https://www.google.com/"
    },
    {
        "year": 2022,
        "title": "Before 7am",
        "descr": "lorem ipsum dolor sit amet 2",
        "urltitle": "google.com",
        "url": "https://www.google.com/"
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
