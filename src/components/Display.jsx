import React from 'react'
import '../styles/Display.scss'
// import useAppState from '../useAppState'
import Home from './Home'
import Exercise from './Exercise'
import Food from './Food'
import Record from './Record'

const Display = props => {
  // const [state, dispatch] = useAppState()
  const displayClasses = navOpen => {
    return navOpen ? 'display navOpen' : 'display'
  }
  const displayDisplay = {
    home: <Home />,
    food: <Food dispatch={props.dispatch} data={props.state.foodData}/>,
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
