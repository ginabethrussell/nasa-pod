// Create menu component

function buildMenu(arr){
    const menu = document.createElement('div');
    menu.classList.add('menuDisplay');
    const menuTitle = document.createElement('h3');
    menuTitle.textContent = "NASA Links";
    const closeSpan = document.createElement('span');
    closeSpan.textContent = 'x';
    closeSpan.addEventListener('click', () => {
        menu.classList.remove('display');
    })
    menu.appendChild(menuTitle);
    menu.appendChild(closeSpan);
    menuList = document.createElement('ul');

    arr.forEach( item => {
        const name = item[0];
        const link = item[1];
        console.log(name, link);
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `<a href=${link}>${name}</a>`;
        menuList.appendChild(menuItem);
    });
    menu.appendChild(menuList);
    return menu;
}

const menuOptions = [['NASA', 'https://www.nasa.gov/'], ['NASA APIs','https://api.nasa.gov/'],
['NASA POD Archive', 'https://apod.nasa.gov/apod/archivepix.html'], ['NASA Images', 'https://www.nasa.gov/multimedia/imagegallery/index.html'],
['NASA Videos', 'https://www.nasa.gov/multimedia/videogallery/index.html']];

const headerMenu = buildMenu(menuOptions);
headerComponent.prepend(headerMenu);