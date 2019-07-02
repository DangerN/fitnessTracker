import React, { useState, useEffect } from 'react'
import '../styles/Counters.scss'

const CounterBox = props => {
  let initialState = {
    total: 0
  }
  for (let i=0; i < props.digitCount; i++) {
    initialState[i] = 0
  }
  const [ counter, setCounter ] = useState(initialState)
  let counterBox = Object.keys(counter).map(count=>{
    return __counterDigit(count, counter[count], {
      increment: id =>{
        setCounter({...counter, [id]: counter[id] + 1})
      },
      decrement: id =>{
        setCounter({...counter, [id]: counter[id] - 1})
      }
    })
  })
  useEffect(_=>{

  })
  return <div value='yeet' className='counterBox'>{counterBox}</div>
}

const CounterButton = props => {
  return (
    <div>CounterButton</div>
  )
}

function __counterDigit(id, value, adjust) {
  return (
    <div className='counterDigit'>
     <div onClick={_=>adjust.increment(id)} className='plusButton'>&#43;</div>
     <div className='digit'>{value}</div>
     <div onClick={_=>adjust.decrement(id)} className='minusButton'>&minus;</div>
    </div>
  )
}

export { CounterBox, CounterButton}
