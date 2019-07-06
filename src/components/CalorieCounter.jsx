import React from 'react'
import {CounterBox, CounterButton} from './Counters'

const CalorieCounter = props => {
  function handleLogEdit() {
    props.dispatch({type: 'addCaloriesToAddCalories'})
  }
  function dispatchValue(event) {
    props.dispatch({
      type: 'changeCaloriesAdd',
      count: parseInt(event.target.value, 10)
    })
  }
  function dispatchIncrement(event) {
    props.dispatch({
      type: 'changeCaloriesAdd',
      count: props.data.caloriesAdd
        + parseInt(event.target.getAttribute('step'), 10)
    })
  }
  return (
    <div>
      <h3>Goal: {props.data.caloriesGoal}Cal</h3>
      <h3>Ate: {props.data.calories}Cal</h3>
      <CounterBox
        units='Cal'
        handleChange={dispatchValue}
        counterValue={props.data.caloriesAdd}
      />
      <CounterButton
        format='add send subtract'
        handleChange={dispatchIncrement}
        handleLogEdit={handleLogEdit}
        step={100}
      />
    </div>
  )
}

export default CalorieCounter
