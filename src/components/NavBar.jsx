import React from 'react'
import { FaUtensils, FaCalendarAlt, FaDumbbell, FaHome, FaAngleDoubleDown } from 'react-icons/fa'
import { ICON } from '../constants'
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
      <FaAngleDoubleDown className={iconClasses(props.navOpen)} onClick={_=>props.dispatch({type: 'toggleNav'})}/>
      <ul className={navBarListClasses(props.navOpen)}>
        <FaHome onClick={_=>props.dispatch({type: 'displayRoute', route: 'home'})} size={ICON.size.nav} className='navItem' id='home'/>
        <FaDumbbell onClick={_=>props.dispatch({type: 'displayRoute', route: 'exercise'})} size={ICON.size.nav} className='navItem' id='in'/>
        <FaUtensils onClick={_=>props.dispatch({type: 'displayRoute', route: 'food'})} size={ICON.size.nav} className='navItem' id='out'/>
        <FaCalendarAlt onClick={_=>props.dispatch({type: 'displayRoute', route: 'record'})} size={ICON.size.nav} className='navItem' id='record'/>
      </ul>
    </nav>
  )
}
export default NavBar
