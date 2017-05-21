import React from 'react';
import ReactDOM from 'react-dom';
import App from './TableExample/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './TableExample/global.css'



ReactDOM.render(<App Title="Welcome to React-with-express-api"/>, document.getElementById('root'));
registerServiceWorker();
