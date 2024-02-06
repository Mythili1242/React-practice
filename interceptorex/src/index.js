import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.interceptors.request.use(request=>{
  console.log(request);
  request.headers.name="mythili"
  return request;
})

axios.defaults.baseURL="https://jsonplaceholder.typicode.com/todos";
axios.defaults.headers.common["Authorization"]="Auth token from index";

axios.interceptors.response.use(response=>{
  console.log(response);
  response.headers.name="sreeram"
  return response;
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
