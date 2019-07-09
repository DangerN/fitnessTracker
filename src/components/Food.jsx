import React from 'react'
import CalorieCounter from './CalorieCounter'
import WaterCounter from './WaterCounter'
import NewDayTimer from './NewDayTimer'

const Food = props => {
  
  return (
    <div>
      <CalorieCounter dispatch={props.dispatch} data={props.data}/>
      <WaterCounter dispatch={props.dispatch} data={props.data}/>
      <NewDayTimer  />
    </div>
  )
}

export default Food
