import React, { useState } from 'react';
import Calendar from 'react-calendar';

/*function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  return (
    <div className='calendar'>
      <button onClick={handlePrevMonth}>{'<'}</button>
      <h2>{monthsOfYear[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h2>
      <button onClick={handleNextMonth}>{'>'}</button>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil((startingDayOfWeek + daysInMonth) / 7)).fill().map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array(7).fill().map((_, dayIndex) => {
                const dayNumber = weekIndex * 7 + dayIndex - startingDayOfWeek + 1;
                const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), dayNumber);
                return (
                  <td key={dayIndex}>
                    {dayNumber > 0 && dayNumber <= daysInMonth && (
                      <button onClick={() => console.log(currentDate)}>{dayNumber}</button>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}*/


export default Calendar;
