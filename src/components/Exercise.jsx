import React from 'react'
import '../styles/Exercise.scss'
import { WORKOUT_LABELS } from '../constants'
import WorkoutList from './WorkoutList'

const Exercise = props => {
  function handleButtonText(button) {
    return WORKOUT_LABELS[button](props.data.currentWorkout)
  }
  function toggleWorkout() {
    props.data.currentWorkout
      ? props.dispatch({type: 'endWorkout'})
      : props.dispatch({type: 'newWorkout'})
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
      <WorkoutList {...props}/>
    </div>
  )
}

export default Exercise
