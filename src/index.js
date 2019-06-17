import './assets/scss/index.scss'
import { renderText } from './renderers/renderText'



const rootElement = document.getElementById('root');
renderText('Webpack Demo', rootElement);

const button = document.createElement('button');
button.innerText = 'Load';
button.addEventListener('click', function () {


    import(/* webpackPreload: true */ './renderers/renderImg')
        .then(lazy => {
            console.log('lazy.default: ', lazy.default);
        })
        .catch(err => {
            console.error(err);
        });


});

rootElement.appendChild(button)
