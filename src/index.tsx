import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import contactReducer from './features/ContactRedu';


const store = configureStore({
  reducer:{
    contact:contactReducer,
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Provider store={store}>
    <App /></Provider>
  </BrowserRouter>,
  </React.StrictMode>
);