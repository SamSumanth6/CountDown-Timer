import React, { useState, useEffect } from 'react';
import './inputForm.css';

const InputForm = ({ setRemainingTime }) => {
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [timerId, setTimerId] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleStartTimer = () => {
    const selectedTime = new Date(selectedDateTime).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = selectedTime - currentTime;

    if (timeDifference > 0) {
      const intervalId = setInterval(() => {
        const updatedTime = selectedTime - new Date().getTime();
        if (updatedTime <= 0) {
          clearInterval(intervalId);
          setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          setIsTimerRunning(false);
        } else {
          const days = Math.floor(updatedTime / (1000 * 60 * 60 * 24));
          const hours = Math.floor((updatedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);
          setRemainingTime({ days, hours, minutes, seconds });
        }
      }, 1000);
      setTimerId(intervalId);
      setIsTimerRunning(true);
    }
  };

  const handleCancelTimer = () => {
    clearInterval(timerId);
    setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setIsTimerRunning(false);
  };

  const handleDateTimeChange = (e) => {
    setSelectedDateTime(e.target.value);
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <div className='container'>
      <input
        type="datetime-local"
        id="time"
        className='input-form'
        name="meeting-time"
        value={selectedDateTime}
        onChange={handleDateTimeChange}
      />
      {isTimerRunning ? (
        <button className='btn-cancel' onClick={handleCancelTimer}>Cancel Timer</button>
      ) : (
        <button className='btn-start' onClick={handleStartTimer}>Start Timer</button>
      )}
    </div>
  );
};

export default InputForm;
