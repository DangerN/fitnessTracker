import React from 'react'
import '../styles/Display.scss'
import Home from './Home'
import Exercise from './Exercise'
import Food from './Food'
import Record from './Record'

const Display = props => {
  const displayNav = _ => {
    return props.state.navOpen ? 'display navOpen' : 'display'
  }
  return <div
      className={displayNav()}>
      <Home {...props}/>
      <Food {...props}/>
      <Exercise {...props}/>
      <Record {...props}/>
    </div>
}
export default Display
