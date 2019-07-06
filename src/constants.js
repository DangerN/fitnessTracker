import React from 'react'
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa'


export const ICON = {
  size: {nav: '50', button: '25'}
}

export const BUTTON = {
  add: function(handleChange, handleLogEdit, step=5){
    return (
      <div
      className='button add'
      step={step}
      onClick={handleChange}><FaPlus size={ICON.size.button} className='buttonIcon' /></div>
    )
  },
  send: function(handleChange, handleLogEdit, step=5){
    return (
      <div
      className='button send'
      onClick={handleLogEdit}><FaCheck size={ICON.size.button} className='buttonIcon' /></div>
    )
  },
  subtract: function(handleChange, handleLogEdit, step=5){
    return (
      <div
      className='button subtract'
      step={-step}
      onClick={handleChange}><FaMinus size={ICON.size.button} className='buttonIcon' /></div>
    )
  }
}
