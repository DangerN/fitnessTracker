import React from 'react'
import useAppState from './useAppState'
import NavBar from './components/NavBar'
import InfoBar from './components/InfoBar'
import Display from './components/Display'
import UserAccountModal from './components/UserAccountModal'
import './App.css'

function App() {
  const [ state, actions ] = useAppState()
  return (
    <div className="App">
      <UserAccountModal state={state} actions={actions} />
      <NavBar state={state} actions={actions} />
      <InfoBar />
      <Display state={state} actions={actions} />
    </div>
  )
}

export default App
