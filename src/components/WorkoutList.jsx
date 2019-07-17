import React, {useState} from 'react'
import '../styles/WorkoutList.scss'
import AddExercise from './AddExercise'
import CurrentWorkout from './CurrentWorkout'

const WorkoutList = props => {
  const { state, dispatch } = props
  const initialState = {
    open: false,
    catagory: Object.keys(state.exerciseData.exercises).map(catagory=>{
      return {[catagory]: false}
    }).reduce((newObject, catagory)=>{
      newObject[Object.keys(catagory)[0]] = Object.values(catagory)[0]
      return newObject
    })
  }
  const [ listState, setListState ] = useState(initialState)
  function toggleAddList() {
    setListState({...listState, open: !listState.open})
  }
  function toggleCatagoryList(catagory) {
    setListState({...listState, catagory: {
      ...listState.catagory, [catagory]: !listState.catagory[catagory]
    }})
  }
  function renderWorkoutList() {
    return !!state.exerciseData.currentWorkout &&
    (
      <>
      <AddExercise
        data={state.exerciseData.exercises}
        state={listState}
        toggleAddList={toggleAddList}
        dispatch={dispatch}
        toggleCatagoryList={toggleCatagoryList}
      />
      <CurrentWorkout data={state.exerciseData} dispatch={dispatch} />
      </>
    )
  }
  return (
    <div id='workoutList'>
      {renderWorkoutList()}
    </div>
  )
}

export default WorkoutList
