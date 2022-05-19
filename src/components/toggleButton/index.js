import React from 'react';
import './index.css';

const ToggleButton = (props) => {

  
  return (
    <div>
      <label className='switch'>
          <input type="checkbox" onClick={props.handleFavourite}/>
          <span className='slider' />
      </label>
    </div>
  )
}

export default ToggleButton
