import React, { useState } from 'react'
import '../styles/Exercise.scss'
import { WORKOUT_LABELS } from '../constants'
import WorkoutList from './WorkoutList'

const Exercise = props => {
  const [ state, setState ] = useState({
    workoutActive: false,
  })
  function handleButtonText(button) {
    return WORKOUT_LABELS[button](state.workoutActive)
  }
  function toggleWorkout() {
    setState({workoutActive: !state.workoutActive})
  }
  return (
    <div className='workoutBox'>
      <div
        className='startButton'
        onClick={toggleWorkout}>
          {handleButtonText('startButton')}
      </div>
      <div
        className='saveButton'
        onClick={toggleWorkout}>
          {handleButtonText('saveButton')}
      </div>
      <WorkoutList />
    </div>
  )
}

export default Exercise
