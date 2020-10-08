const page = document.querySelector('.container');

function buildHeader (img, text){
    // Create header element
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    // Create logo img
    const logoImg = document.createElement('img');
    logoImg.id = 'logo';
    logoImg.src = img;
    // Create h1 page title
    const pageTitle = document.createElement('h1')
    pageTitle.id = 'page-title'
    pageTitle.textContent = text;
    // Create img element for menu icon
    const menuIcon = document.createElement('img');
    menuIcon.id = 'menu';
    menuIcon.src = 'images/menu.png';
    menuIcon.addEventListener('click', () => {
        const menuDisplay = document.querySelector('.menuDisplay');
        menuDisplay.classList.add('display');
    })
    headerDiv.appendChild(logoImg);
    headerDiv.appendChild(pageTitle);
    headerDiv.appendChild(menuIcon);
    return headerDiv;
}

const headerComponent = buildHeader('https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg', 'NASA Astronomy Picture of the Day');

page.appendChild(headerComponent);