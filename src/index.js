import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  Its worth noting that in React 18 when you run in dev mode with React.StrictMode on. Your useEffect hook will always run atleast twice because your component is mounted twice.


*/
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>


);


