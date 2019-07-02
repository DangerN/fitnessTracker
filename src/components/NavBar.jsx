import React from 'react'
import { FaUtensils, FaCalendarAlt, FaDumbbell, FaHome, FaAngleDoubleDown } from 'react-icons/fa'
import { NAVICON } from '../constants'
import '../styles/NavBar.scss'

const NavBar = props => {
  const navBarListClasses = navOpen => {
    return navOpen ? 'navList navOpen' : 'navList'
  }
  const iconClasses = navOpen => {
    return navOpen ? 'icon navOpen' : 'icon'
  }
  return (
    <nav>
      <FaAngleDoubleDown className={iconClasses(props.state.navOpen)} onClick={props.actions.toggleNav}/>
      <ul className={navBarListClasses(props.state.navOpen)}>
        <FaHome onClick={_=>props.actions.changeDisplayRoute('home')} size={NAVICON.size} className='navItem' id='home'/>
        <FaDumbbell onClick={_=>props.actions.changeDisplayRoute('exercise')} size={NAVICON.size} className='navItem' id='in'/>
        <FaUtensils onClick={_=>props.actions.changeDisplayRoute('food')} size={NAVICON.size} className='navItem' id='out'/>
        <FaCalendarAlt onClick={_=>props.actions.changeDisplayRoute('record')} size={NAVICON.size} className='navItem' id='record'/>
      </ul>
    </nav>
  )
}
export default NavBar
