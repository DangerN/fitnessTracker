import React from 'react'
import { CounterBox, CounterButton } from './Counters'

const WaterCounter = props => {
  return (
    <div>
      <h3>Goal: 2000ml</h3>
      <h3>Drank: 1000ml</h3>
      <CounterBox digitCount={4} />
      <CounterButton />
    </div>
  )
}

export default WaterCounter
