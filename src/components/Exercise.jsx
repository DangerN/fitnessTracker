import React from 'react'
import '../styles/Exercise.scss'
import { WORKOUT_LABELS, SIMPLECLASS } from '../constants'
import WorkoutList from './WorkoutList'

const Exercise = props => {
  const {state, dispatch} = props
  function handleButtonText(button) {
    console.log(WORKOUT_LABELS[button](state.exerciseData.currentWorkout));
    return WORKOUT_LABELS[button](state.exerciseData.currentWorkout)
  }
  function toggleWorkout() {
    state.exerciseData.currentWorkout
      ? dispatch({type: 'endWorkout'})
      : dispatch({type: 'newWorkout'})
  }
  return (
    <div className={SIMPLECLASS.visible('exercise', state.displayRoute)}>
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
