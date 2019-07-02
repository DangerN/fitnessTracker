import React from 'react'
import '../styles/Display.scss'
import Home from './Home'
import Exercise from './Exercise'
import Food from './Food'
import Record from './Record'

const Display = props => {
  const displayClasses = state => {
    return state ? 'display navOpen' : 'display'
  }
  const displayDisplay = {
    home: <Home />,
    food: <Food />,
    exercise: <Exercise />,
    record: <Record />
  }
  return <div
      className={displayClasses(props.state.navOpen)}
    >
      {displayDisplay[props.state.displayRoute]}
    </div>
}
export default Display
