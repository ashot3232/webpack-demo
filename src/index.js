import './assets/scss/index.scss'
import { renderText } from './renderers/renderText'
import './renderers/renderImg'

const rootElement = document.getElementById('root');
renderText('Webpack Demo', rootElement);

