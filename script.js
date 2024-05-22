var uiContainer = document.getElementById('projects');

const projects = [
    {
        "company":"O3 Interfaces",
        "year": "2022 - in-development",
        "title": "UBL Retail Web Application",
        "descr": "In this project, I successfully developed frontend user journeys for over 12 modules of the UBL retail banking web application. These modules include RAAST, Roshan Digital Account, Go Green, Service Charges, Prelogin, Dashboard, Multiple Bills Management, Zakat, and Donation Services. I ensured complete responsiveness across mobile and tablet devices. Additionally, I collaborated with team members to improve the efficiency of pre-built components by optimizing their complexity.",
        "urltitle": "link not available",
        "url": "#"
    },
    {
        "company":"Cquark",
        "year": 2024,
        "title": "Ontario Student Funding",
        "descr": "I have designed and developed the landing page for this website, ensuring full responsiveness across various devices.",
        "urltitle": "ontariostudentfunding.com",
        "url": "https://ontariostudentfunding.com/"
    },
    {
        "company":"Cquark",
        "year": 2023,
        "title": "Foodster Club",
        "descr": "I've successfully crafted the entire frontend of this web application based on wireframes, ensuring responsiveness across various devices. Bootstrap, SCSS, and other frontend technologies were leveraged to achieve this outcome.",
        "urltitle": "foodster.club",
        "url": "https://portal.foodster.club/"
    },
    {
        "company":"Cquark",
        "year": 2022,
        "title": "The A-Lyst",
        "descr": "This refined ecommerce store has been meticulously crafted on the Shopify platform, integrating the default Dawn theme and featuring customized product and collections pages.",
        "urltitle": "the-a-lyst.myshopify.com",
        "url": "https://the-a-lyst.myshopify.com/"
    },
    {
        "company":"Cquark",
        "year": 2022,
        "title": "Kyle Jackie Haircare",
        "descr": "At Kyle Jackie Hair Care, we spearheaded the development of a comprehensive ecommerce platform, encompassing store design and product management, for our client. Our approach adhered to industry best practices, ensuring a seamless shopping experience for customers.",
        "urltitle": "kylejackiehaircare.com",
        "url": "https://www.kylejackiehaircare.com"
    },
    {
        "company":"Cquark",
        "year": 2021,
        "title": "Kuchen Kompane",
        "descr": "We were tasked with redesigning and developing the entire homepage of the ecommerce store, which is built on the Shopify Plus platform. Our approach followed industry best practices to meet the requirements effectively.",
        "urltitle": "kuchenkompane.de",
        "url": "https://kuechenkompane.de/"
    }
]
projects.forEach(listProjects);

function listProjects(item, index) {
    uiContainer.innerHTML += "<div class='project-details'><div class='proj-title'><h3 class='font-barlow h3 fw-800' >" + item.title + "</h3><span class='font-shareTech p3 fw-400 badge'>" + item.company + "</span></div><p class='font-shareTech p3 fw-400'>" + item.descr + "</p><a href='" + item.url + "' class='font-shareTech p3 fw-500 link-colored' target='blank'>" + item.urltitle + "&nbsp;&nbsp;<i class='fa-solid fa-arrow-right'></i></a>";
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
