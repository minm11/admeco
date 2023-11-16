import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from "react-router-dom";
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './components/auth';

const msalinstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <MsalProvider instance={msalinstance}>
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/*' element={<App msalinstance={msalinstance}/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
  </MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
