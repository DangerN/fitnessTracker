import React from 'react'
import '../styles/Display.scss'
import Home from './Home'
import Exercise from './Exercise'
import Food from './Food'
import Record from './Record'

const Display = props => {
  const displayNav = _ => {
    return props.navOpen ? 'display navOpen' : 'display'
  }

  const displayClasses = componentName => {
    const route = props.displayRoute
    return route === componentName ? componentName + 'showing' : componentName
  }
  return <div
      className={displayNav()}>
      <Home className={displayClasses('home')}/>
      <Food className={displayClasses('food')} dispatch={props.dispatch} data={props.state.foodData}/>
      <Exercise className={displayClasses('exercise')} dispatch={props.dispatch} data={props.state.exerciseData}/>
      <Record className={displayClasses('record')}/>
    </div>
}
export default Display
