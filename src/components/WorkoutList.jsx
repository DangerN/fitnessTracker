import React, {useState} from 'react'
import '../styles/WorkoutList.scss'
import AddExercise from './AddExercise'
import CurrentWorkout from './CurrentWorkout'

const WorkoutList = props => {
  const { data, dispatch } = props
  const initialState = {
    open: false,
    catagory: Object.keys(data.exercises).map(catagory=>{
      return {[catagory]: false}
    }).reduce((newObject, catagory)=>{
      newObject[Object.keys(catagory)[0]] = Object.values(catagory)[0]
      return newObject
    })
  }
  const [ state, setState ] = useState(initialState)
  function toggleAddList() {
    setState({...state, open: !state.open})
  }
  function toggleCatagoryList(catagory) {
    setState({...state, catagory: {
      ...state.catagory, [catagory]: !state.catagory[catagory]
    }})
  }
  // function renderCurrentWorkout() {
  //   console.log(!!data.currentWorkout, data.currentWorkout);
  //   return <CurrentWorkout data={data} dispatch={dispatch} />
  // }
  function renderWorkoutList() {
    return !!data.currentWorkout &&
    (
      <>
      <AddExercise
        data={data.exercises}
        state={state}
        toggleAddList={toggleAddList}
        dispatch={dispatch}
        toggleCatagoryList={toggleCatagoryList}
      />
      <CurrentWorkout data={data} dispatch={dispatch} />
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
