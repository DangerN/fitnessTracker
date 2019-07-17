import React from 'react'
import CalorieCounter from './CalorieCounter'
import WaterCounter from './WaterCounter'
import NewDayTimer from './NewDayTimer'
import { SIMPLECLASS } from '../constants'

const Food = props => {
  const {state, dispatch} = props
  return (
    <div className={SIMPLECLASS.visible('food', state.displayRoute)}>
      <CalorieCounter dispatch={dispatch} data={state.foodData}/>
      <WaterCounter dispatch={dispatch} data={state.foodData}/>
      <NewDayTimer  />
    </div>
  )
}

export default Food
