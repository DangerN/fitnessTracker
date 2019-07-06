import React from 'react'
import { FaUtensils, FaCalendarAlt, FaDumbbell, FaHome, FaAngleDoubleDown } from 'react-icons/fa'
import { NAVICON } from '../constants'
import '../styles/NavBar.scss'
// import useAppState from '../useAppState'

const NavBar = props => {
  // const [state, dispatch] = useAppState()
  const navBarListClasses = navOpen => {
    return navOpen ? 'navList navOpen' : 'navList'
  }
  const iconClasses = navOpen => {
    return navOpen ? 'icon navOpen' : 'icon'
  }
  return (
    <nav>
      <FaAngleDoubleDown className={iconClasses(props.navOpen)} onClick={_=>props.dispatch({type: 'toggleNav'})}/>
      <ul className={navBarListClasses(props.navOpen)}>
        <FaHome onClick={_=>props.dispatch({type: 'displayRoute', route: 'home'})} size={NAVICON.size} className='navItem' id='home'/>
        <FaDumbbell onClick={_=>props.dispatch({type: 'displayRoute', route: 'exercise'})} size={NAVICON.size} className='navItem' id='in'/>
        <FaUtensils onClick={_=>props.dispatch({type: 'displayRoute', route: 'food'})} size={NAVICON.size} className='navItem' id='out'/>
        <FaCalendarAlt onClick={_=>props.dispatch({type: 'displayRoute', route: 'record'})} size={NAVICON.size} className='navItem' id='record'/>
      </ul>
    </nav>
  )
}
export default NavBar
