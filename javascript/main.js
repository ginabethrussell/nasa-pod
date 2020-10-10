// const page = document.querySelector('.container');

function buildMain(api){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    // Use axios.get to retrieve data
    axios.get(api)
    .then((response) => {
        console.log(response.data);
        constructMainElements(response.data);
    })
    .catch(err => {
        const defaultObj = {
            date: '2020-06-22',
            title: '20th Anniversary ISS Poster',
            explanation: '',
            hdurl: 'images/default-iss-anniv.png'
        }
        constructMainElements(defaultObj);
    })
    
    function constructMainElements(obj){
        const textContainer = document.createElement('div');
        textContainer.classList.add('textContainer');
        const dateP = document.createElement('p');
        dateP.classList.add('date');
        dateP.textContent = obj.date;
        
        const titleHeader = document.createElement('h2');
        titleHeader.textContent = obj.title;

        const text = document.createElement('p');
        text.textContent = obj.explanation;

        const image = document.createElement('img');
        image.classList.add('pic');
        image.src = obj.hdurl;
       // image.style.width = '400px';

        textContainer.appendChild(titleHeader);
        textContainer.appendChild(dateP);
        textContainer.appendChild(text);
        mainDiv.appendChild(image);
        mainDiv.appendChild(textContainer);
        
    }
    return mainDiv;
}
    

const nasaApiPodKey = 'https://api.nasa.gov/planetary/apod?api_key=93HIdg6dILvLH6B3N38HAFAhLyTE2s9BauFO8Mof';

//generates today's date to add as a param to the key
let today = new Date();
today = today.toString().split(' ');
// Create month for date param
switch (today[1]) {
    case 'Jan':
        today[1] = 01;
        break;
    case 'Feb':
        today[1] = 02;
        break;
    case 'Mar':
        today[1] = 03;
        break;
    case 'Apr':
        today[1] = 04;
        break;
    case 'May':
        today[1] = 05;
        break;
    case 'Jun':
        today[1] = 06;
        break;
    case 'Jul':
        today[1] = 07;
        break;
    case 'Aug':
        today[1] = 08;
        break;
    case 'Sep':
        today[1] = 09;
        break;
    case 'Oct':
        today[1] = 10;
        break;
    case 'Nov':
        today[1] = 11;
        break;
    default:
        today[1] = 12
}
// Create date param YYYY-MM-DD
const date = today[3] + '-' + today[1] + '-' + today[2];
const nasaApiReqStr = nasaApiPodKey + '&date=' + date;
console.log(nasaApiReqStr);
const mainComponent = buildMain(nasaApiReqStr);

page.appendChild(mainComponent);

// NASA Data Response Object
// copyright: "Matt Smith"
// date: "2020-10-08"
// explanation: "Lighter than typically dark, smooth, mare the Mare Frigoris lies in the far lunar north. Also known as the Sea of Cold, it stretches across the familiar lunar nearside in this close up of the waxing gibbous Moon's north polar region. Dark-floored, 95 kilometer wide crater Plato is just left of the center. Sunlit peaks of the lunar Alps (Montes Alpes) are highlighted below and right of Plato, between the more southern Mare Imbrium (Sea of Rains) and Mare Frigoris. The prominent straight feature cutting through the mountains is the lunar Alpine Valley (Vallis Alpes). Joining the Mare Imbrium and Mare Frigoris, the lunar valley is about 160 kilometers long and up to 10 kilometers wide."
// hdurl: "https://apod.nasa.gov/apod/image/2010/MareFrigorisMattSmith.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Mare Frigoris"