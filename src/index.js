import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StatePriveder } from './context/start';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <StatePriveder>
    <App />
   </StatePriveder>
  </BrowserRouter>
);