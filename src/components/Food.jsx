import React from 'react'
import CalorieCounter from './CalorieCounter'
import WaterCounter from './WaterCounter'
import NewDayButton from './NewDayButton'

const Food = props => {
  return (
    <div>
      <CalorieCounter />
      <WaterCounter />
      <NewDayButton />
    </div>
  )
}

export default Food
