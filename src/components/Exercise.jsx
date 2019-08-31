import React from 'react'
import '../styles/Exercise.scss'
import { WORKOUT_LABELS, SIMPLECLASS } from '../constants'
import Workout from './Workout'
import PastWorkoutList from './PastWorkoutList'

const Exercise = props => {
  const {state, dispatch} = props
  // function handleButtonText(button) {
  //   console.log(WORKOUT_LABELS[button](state.exerciseData.currentWorkout));
  //   return WORKOUT_LABELS[button](state.exerciseData.currentWorkout)
  // }
  // function toggleWorkout() {
  //   state.exerciseData.currentWorkout
  //     ? dispatch({type: 'endWorkout'})
  //     : dispatch({type: 'newWorkout'})
  // }
  return (
    <div className={SIMPLECLASS.visible('exercise', state.displayRoute)}>
      <Workout {...props}/>
      <PastWorkoutList {...props}/>
    </div>
  )
}

export default Exercise
