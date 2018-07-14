import React from 'react';
import ReactDOM from 'react-dom';

import Doc from './components/Doc'
import AuthSite from './components/Auth'
import StaticSite from './components/Router';
import './index.css';

//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AuthSite/>, document.getElementById('root'));
//registerServiceWorker();