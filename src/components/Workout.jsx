import React from 'react'

const Workout = props => {
  const {state, dispatch} = props
  return (
    <ul className='currentWorkout'>
      <li className='exercisePanel'>
        <ul className='setList'>
          <li className='set' />
        </ul>
      </li>
    </ul>
  )
}

export default Workout
