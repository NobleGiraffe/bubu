import React, { useState } from 'react';
import Calendar from './components/Calendar';
import './styles.css';

const App = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (event) => {
    setStartDate(new Date(event.target.value));
  };

  return (
    <div className="app container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">NAPLEX Study Plan Calendar</h1>
      <div className="date-picker flex justify-center mb-6">
        <label htmlFor="start-date" className="mr-4 text-lg font-medium">Choose Start Date: </label>
        <input
          type="date"
          id="start-date"
          className="border border-gray-300 p-2 rounded"
          value={startDate.toISOString().substr(0, 10)}
          onChange={handleDateChange}
        />
      </div>
      <Calendar startDate={startDate} />
    </div>
  );
};

export default App;
