import React from 'react';
import ReactDOM from 'react-dom'
import './indes.css';
import App from '.App';
import * as serviceWorker from './serviceWorker';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

serviceWorker.unregister();