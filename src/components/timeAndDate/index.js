import React from 'react';
import './index.css';

const DateAndTime = () => {
  return (
    <>
    <h5>Please specify date and time for pickup.</h5>
      <div className='dateAndTime'>
          <input type="date" name="" id="" className='date'/>
          <input type="time" name="" id="" className='time' />
      </div>
    </>
  )
}

export default DateAndTime;
