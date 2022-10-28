import React from 'react'
import'./burguer.scss';

function BurguerButton(props) {
  return (
      <div className='burguer'>
        <div  onClick={props.handleClick}
              className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  )
}

export default BurguerButton
