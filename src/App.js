import './App.css';
import Calendar from 'react-calendar';
import DoctorList from './DoctorList';
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import { Route, Router, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path='/' element={<Accueil />} />
        <Route path='/login' element={<Login />} />
      </Router>

      <DoctorList /><br />
      <h4>Select a day for your appointment</h4>
      <Calendar />
      <button type='button'><h4>Book</h4></button>
    </>
  )
}

export default App;
