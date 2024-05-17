import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <TonConnectUIProvider manifestUrl='https://getgems.io/tcm.json'>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </TonConnectUIProvider>
  </React.StrictMode>
);