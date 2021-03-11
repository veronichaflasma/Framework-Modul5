import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import BasicRouter from './BasicRouter';
// import UrlParams from './UrlParameters';
import AuthExample from './AuthExample';
// import NestingRouter from './NestingRouter';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth';

ReactDOM.render(
  <React.StrictMode>
    {/* <BasicRouter /> */}
    {/* <UrlParams/> */}
    {/* <NestingRouter/> */}
    {/* <AuthExample/> */}
    {/* <App/> */}
    <Auth/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
