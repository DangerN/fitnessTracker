import React from 'react'
import { CounterBox, CounterButton } from './Counters'

const WaterCounter = props => {
  function handleChange (event) {
    event.target.value.length > 0 &&
    event.target.value >= 0 &&
    !isNaN(event.target.value) &&
    props.dispatch({
      type: 'changeWaterAdd',
      count: parseInt(event.target.value, 10)
    })
  }
  return (
    <div>
      <h3>Goal: {props.data.waterGoal}ml</h3>
      <h3>Drank: {props.data.water}ml</h3>
      <CounterBox units='ml' handleChange={handleChange} counterValue={props.data.waterAdd} step={50}/>
      <CounterButton />
    </div>
  )
}

export default WaterCounter
