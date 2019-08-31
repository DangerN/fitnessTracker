import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import { LoadingWheel } from './LoadingWheel'
import '../styles/UserAccountModal.scss'

const UserAccountModal = props => {
  const modalClasses = displayStatus => {
    return displayStatus ? 'accountModal' : 'accountModal noDisplay'
  }
  const handleClick = event => {
    console.log(event);
    props.dispatch({type: 'toggleAccountModal'})
  }

  return (
    <div className={modalClasses(props.accountModalVisible)} onClick={handleClick}>
      <FaCircleNotch size={50} className='loading' />
      <FaCircleNotch size={60} className='loading' />
      <FaCircleNotch size={70} className='loading' />
      <LoadingWheel />
    </div>
  )

}

export default UserAccountModal
