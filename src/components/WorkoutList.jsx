import React from 'react'
import '../styles/WorkoutList.scss'
import AddExercise from './AddExercise'

import { TEST_DATA } from '../testData'

const WorkoutList = props => {
  return (
    <div id='workoutList'>
      <div className='addExercise'>add exercise</div>
      <AddExercise data={TEST_DATA.exercises} />
    </div>
  )
}

export default WorkoutList
