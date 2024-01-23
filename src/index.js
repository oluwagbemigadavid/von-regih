import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import TisLenis from './Components/TisLenis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TisLenis>
      <App /> 
    </TisLenis>
  </React.StrictMode>
);

