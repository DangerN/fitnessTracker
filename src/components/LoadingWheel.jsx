import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import '../styles/LoadingWheel.scss'

export const LoadingWheel = props => {
    const createCircles = _ => {

    }
    return (
      <div>
        <FaCircleNotch size={50} className='loading' />
        <FaCircleNotch size={50} className='loading' />
        <FaCircleNotch size={50} className='loading' />
      </div>
    )
}

export default LoadingWheel
