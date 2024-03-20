import React from 'react';
import './card.css';

const Card = ({ remainingTime }) => {
  const { days, hours, minutes, seconds } = remainingTime;
  const isLongDuration = days > 100;

  return (
    <div className='box'>
      {isLongDuration ? (
        <div className='long-duration-message'>
          <p className='long-duration-text'>Selected time is more than 100 days!</p>
        </div>
      ) : (
        days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
          <div className='congrats'>
            <p className='congrats-text'>🎉 The Countdown is over! What's next on your adventure? 🎉</p>
          </div>
        ) : (
          <>
            <div className='card'>
              <div className='card-body'>
                <h1 className='number'>{days}</h1>
                <h2 className='format'>Days</h2>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h1 className='number'>{hours}</h1>
                <h2 className='format'>Hours</h2>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h1 className='number'>{minutes}</h1>
                <h2 className='format'>Minutes</h2>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h1 className='number'>{seconds}</h1>
                <h2 className='format'>Seconds</h2>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Card;
