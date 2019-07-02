import React from 'react'
import '../styles/UserAccountModal.scss'

const UserAccountModal = props => {
  const modalClasses = displayStatus => {
    return displayStatus ? 'accountModal' : 'accountModal noDisplay'
  }
  return <div
    className={modalClasses(props.state.accountModalVisible)}
    onClick={props.actions.hideAccountModal}
  />
}

export default UserAccountModal
