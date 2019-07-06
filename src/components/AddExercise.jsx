import React from 'react'

const AddExercise = (props) => {

  function showCatagories() {
    return Object.keys(props.data).map(catagory=>{
      return <li onClick={_=>showSelections(catagory)}>{catagory}</li>
    })
  }
  function showSelections(catagory) {
    return props.data[catagory].map(exercise=>{
      return <li>{exercise.name}</li>
    })
  }
  return (
    <div id='addExercise'>
      <ul className='selectionBox'>
        <div id='selectionBoxNav' />
        {showCatagories()}
      </ul>
    </div>
  )
}

export default AddExercise
