import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
<React.StrictMode>
    <MoralisProvider appId={process.env.REACT_APP_MORALIS_APPLICATION_ID} serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}>
    <App />
    </MoralisProvider>,
  </React.StrictMode>,

*/
