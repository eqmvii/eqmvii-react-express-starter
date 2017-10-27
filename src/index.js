import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerServiceWorker, unregister }from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// old code that caused caching issue
// Meant updates took n+1 refreshes, which seems... insane? 
// registerServiceWorker();

// do this instead:
unregister();
