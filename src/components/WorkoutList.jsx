import React, {useState} from 'react'
import '../styles/WorkoutList.scss'
import AddExercise from './AddExercise'

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
  return (
    <div id='workoutList'>
      <AddExercise
        data={data.exercises}
        state={state}
        toggleAddList={toggleAddList}
        dispatch={dispatch}
        toggleCatagoryList={toggleCatagoryList}
      />
    </div>
  )
}

export default WorkoutList
