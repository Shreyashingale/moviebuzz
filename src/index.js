import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './features/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /*
  Its worth noting that in React 18 when you run in dev mode with React.StrictMode on. Your useEffect hook will always run atleast twice because your component is mounted twice.


*/
    <BrowserRouter><Provider store = {store}><App /></Provider></BrowserRouter>


);


