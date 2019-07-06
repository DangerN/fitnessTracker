import React from 'react'
import '../styles/UserAccountModal.scss'
import useAppState from '../useAppState'

const UserAccountModal = props => {
  const [state, dispatch] = useAppState()
  const modalClasses = displayStatus => {
    return displayStatus ? 'accountModal' : 'accountModal noDisplay'
  }
  return <div
    className={modalClasses(state.accountModalVisible)}
    onClick={_=>dispatch({type: 'toggleAccountModal'})}
  />
}

export default UserAccountModal
