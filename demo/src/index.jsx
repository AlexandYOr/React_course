import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Book = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>год издания: {props.year} г.</p>
      <p>стоимость {props.price} руб.</p>
      <p>{props.children}</p>
    </div>
  )
}

const Application = () => {
  return (
    <div>
      <Book name='книга 1' year='1800' price='100'> 
      Text here 
      </Book>
      <Book name='книга 2' year='1900' price='200'/>
      <Book name='книга 3' year='2000' price='300'/>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
