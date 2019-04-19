import React from 'react';
import ReactDOM from 'react-dom';
// Fix: Import missing component
import App from './components/App';

// Fix: Components need to be wrapped in JSX syntax
// Fix: DOM elements should be created before appending React components
ReactDOM.render(<App />, document.getElementById('app'));
