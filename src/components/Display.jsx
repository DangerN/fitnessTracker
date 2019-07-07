import React from 'react'
import '../styles/Display.scss'
import Home from './Home'
import Exercise from './Exercise'
import Food from './Food'
import Record from './Record'

const Display = props => {
  const {state, dispatch} = props
  const displayClasses = navOpen => {
    return navOpen ? 'display navOpen' : 'display'
  }
  const displayDisplay = {
    home: <Home />,
    food: <Food dispatch={dispatch} data={state.foodData}/>,
    exercise: <Exercise dispatch={dispatch} data={state.exerciseData}/>,
    record: <Record />
  }
  return <div
      className={displayClasses(props.state.navOpen)}>
      {displayDisplay[props.state.displayRoute]}
    </div>
}
export default Display
