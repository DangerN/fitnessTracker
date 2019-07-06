import React from 'react'
import '../styles/Counters.scss'

function CounterBox (props) {
  function handleChange(event) {
      isNaN(event.target.value) &&
      props.handleChange(event)
  }
  return (
    <div>
      <input
        type='text'
        // pattern='[0-9]*'
        value={props.counterValue}
        onChange={handleChange}
      />
    </div>
  )
}

const CounterButton = props => {
  return (
    <div>CounterButton</div>
  )
}

export { CounterBox, CounterButton}
