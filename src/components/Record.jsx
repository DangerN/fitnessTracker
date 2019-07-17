import React from 'react'
import { SIMPLECLASS } from '../constants'

const Record = props => {
  const {state, dispatch} = props
  return (
    <div className={SIMPLECLASS.visible('record', state.displayRoute)}>
      record
    </div>
  )
}

export default Record
