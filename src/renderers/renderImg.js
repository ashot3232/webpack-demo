import image from '../assets/img/test.jpg'

const rootElement = document.getElementById('root');
const imgElement = document.createElement('img');
imgElement.src = image;
rootElement.appendChild(imgElement);


