import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCA9dDOGswhev8yCXPWJ36yuS7hqfNJyFA",
  authDomain: "cart-a3eb6.firebaseapp.com",
  projectId: "cart-a3eb6",
  storageBucket: "cart-a3eb6.appspot.com",
  messagingSenderId: "640283995675",
  appId: "1:640283995675:web:404f4230bf83e3bdf892be"
};

const app = firebase.default.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
