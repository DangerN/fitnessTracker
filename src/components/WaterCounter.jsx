import React from 'react'
import { CounterBox, CounterButton } from './Counters'

const WaterCounter = props => {
  function dispatchIncrement(event) {
    props.dispatch({
      type: 'changeWaterAdd',
      count: props.data.waterAdd
        + parseInt(event.target.getAttribute('step'), 10)
    })
  }
  function dispatchValue(event) {
    props.dispatch({
      type: 'changeWaterAdd',
      count: parseInt(event.target.value, 10)
    })
  }
  function handleLogEdit() {
    props.dispatch({type: 'addWaterAddToWater'})
  }
  return (
    <div>
      <h3>Goal: {props.data.waterGoal}ml</h3>
      <h3>Drank: {props.data.water}ml</h3>
      <CounterBox
        units='ml'
        handleChange={dispatchValue}
        counterValue={props.data.waterAdd}
      />
      <CounterButton
        format='add send subtract'
        handleChange={dispatchIncrement}
        handleLogEdit={handleLogEdit}
        step={50}
      />
    </div>
  )
}

export default WaterCounter
