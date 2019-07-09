import React from 'react'
import '../styles/Counters.scss'
import { BUTTON } from '../constants'

function CounterBox (props) {
  return (
    <div className='counterBox'>
      <input
        className='counterInput'
        type='number'
        value={props.counterValue}
        onChange={props.handleChange}
      />
    </div>
  )
}
//Required props: format, handleChange, handleLogEdit, step
const CounterButton = props => {
  function generateButton() {
    return props.format.split(' ').map(segment => {
      return BUTTON[segment](props.handleChange, props.handleLogEdit, props.step)
    })
  }
  return (
    <div className='buttonContainer'>
      {generateButton()}
    </div>
  )
}

export { CounterBox, CounterButton}
