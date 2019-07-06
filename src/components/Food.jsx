import React from 'react'
import CalorieCounter from './CalorieCounter'
import WaterCounter from './WaterCounter'
import NewDayButton from './NewDayButton'

const Food = props => {
  return (
    <div>
      <CalorieCounter />
      <WaterCounter dispatch={props.dispatch} data={props.data}/>
      <NewDayButton />
    </div>
  )
}

export default Food
