import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './fonts/TrueLies.woff';
import './fonts/TrueLies.woff2';
import './fonts/unicode.impact-webfont.woff';
import './fonts/unicode.impact-webfont.woff2';
import './fonts/Poppins-Medium.woff';
import './fonts/Poppins-Medium.woff2';
import './fonts/Poppins-MediumItalic.woff';
import './fonts/Poppins-MediumItalic.woff2';
import './fonts/Poppins-Regular.woff';
import './fonts/Poppins-Regular.woff2';
import './fonts/LocalGoodsOutline.woff';
import './fonts/LocalGoodsOutline.woff2';
import './fonts/Agenor-Black.woff';
import './fonts/Agenor-Black.woff2';
import './fonts/Agenor-Light.woff';
import './fonts/Agenor-Light.woff2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
