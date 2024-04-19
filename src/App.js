import './App.css';
import Calendar from 'react-calendar';
import DoctorList from './DoctorList';
import Recherche from './Recherche';
import Bandeau from './Bandeau';
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';

function App() {
  return (
    <>
      <h1>Docteur AnyWhere</h1><br />
      <Bandeau />
      <Recherche />

      <DoctorList /><br />
      <h4>Select a day for your appointment</h4>
      <Calendar />
      <button type='button'><h4>Book</h4></button>
    </>
  )
}

export default App;
