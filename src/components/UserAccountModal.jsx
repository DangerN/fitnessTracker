import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import '../styles/UserAccountModal.scss'

const UserAccountModal = props => {
  const modalClasses = displayStatus => {
    return displayStatus ? 'accountModal' : 'accountModal noDisplay'
  }
  // setTimeout(_=>props.dispatch({type: 'toggleAccountModal'}), 400)
  return (
    <div
      className={modalClasses(props.accountModalVisible)}
      onClick={_=>props.dispatch({type: 'toggleAccountModal'})}
    >
    <FaCircleNotch size={50} className='loading' />
    </div>
  )

}

export default UserAccountModal
