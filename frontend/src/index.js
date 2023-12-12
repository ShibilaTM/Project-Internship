import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./Reducers/User";
import Userisloggedin from "./Reducers/Userisloggedin";

const store = configureStore({
  reducer: {
    userid: userReducer,
    userisloggedinstate: Userisloggedin
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

);


