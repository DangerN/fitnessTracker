import React from 'react'
import { SIMPLECLASS } from '../constants'

const Home = props => {
  console.log(props.state.displayRoute);
  return (
    <div className={
      SIMPLECLASS.visible('home', props.state.displayRoute)
    }>wtf do i put here happy faces?</div>
  )
}

export default Home
