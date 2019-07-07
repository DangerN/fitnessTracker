import React from 'react'
import '../styles/AddExercise.scss'

const AddExercise = (props) => {
  function showCatagories() {
    return Object.keys(props.data).map(catagory=>{
      return <ul
        key={catagory}
        onClick={_=>props.toggleCatagoryList(catagory)}
        className={`catagory ${catagoryToggle(catagory)}`}>
          {catagory}{showExercises(catagory)}
        </ul>
    })
  }
  function showExercises(catagory) {
    return props.data[catagory].map(exercise=>{
      return <li
        className='exercise'
        onClick={_=>{
          props.dispatch({type: 'selectNewExercise', exercise: exercise})
          props.toggleAddList()
        }}
        key={exercise.id}>
          {exercise.name}
        </li>
    })
  }
  function openToggle(openness) {
    return openness ? 'open' : null
  }
  function catagoryToggle(catagory) {
    return props.state.catagory[catagory] ? 'open' : ''
  }
  function addExerciseToggle() {
      return props.state.open ? 'open' : ''
  }
  return (
    <div id='addExercise' className={addExerciseToggle()}>
      <p onClick={props.toggleAddList}>Add Exercise</p>
      <ul className='selectionBox'>
        <div id='selectionBoxNav' />
        {showCatagories()}
      </ul>
    </div>
  )
}

export default AddExercise
