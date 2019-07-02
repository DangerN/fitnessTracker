import { useState, useEffect } from 'react'

const useAppState = _ => {
  const initialState = {
    accountModalVisible: true,
    navOpen: false,
    displayRoute: 'food'
  }
  const [ appState, setAppState ] = useState(initialState)
  const actions = getActions(setAppState)
  return (
    [ appState, actions ]
  )
}
export default useAppState

const getActions = setAppState => ({
  hideAccountModal: _ => {
    setAppState(state => ({...state, accountModalVisible: false}))
  },
  toggleNav: _ => {
    setAppState(state => ({...state, navOpen: state.navOpen ? false : true}))
  },
  changeDisplayRoute: route => {
    setAppState(state => ({...state, displayRoute: route}))
  }
})
