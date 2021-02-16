import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV == 'development'){
    ReactDOM.render(  <App />,document.getElementById('root') );
}
else{
    ReactDOM.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode> ,
    document.getElementById('root') );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
