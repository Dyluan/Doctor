import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, createBrowserRouter, createRoutesFromElements, BrowserRouter } from 'react-router-dom';
import Accueil from './Accueil';
import Login from './Login';
import DoctorList from './DoctorList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accueil />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/search' element={<DoctorList />}/>
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<React.StrictMode>
    <App />
  </React.StrictMode>
  */