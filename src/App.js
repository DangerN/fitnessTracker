import React from 'react'
import useAppState from './useAppState'
import NavBar from './components/NavBar'
import InfoBar from './components/InfoBar'
import Display from './components/Display'
import UserAccountModal from './components/UserAccountModal'
import './App.css'


function App() {
  const [state, dispatch] = useAppState()
  return (
    <div className="App">
      <UserAccountModal dispatch={dispatch} accountModalVisible={state.accountModalVisible}/>
      <NavBar navOpen={state.navOpen} dispatch={dispatch}/>
      <InfoBar />
      <Display dispatch={dispatch} state={state}/>
    </div>
  )
}

export default App
