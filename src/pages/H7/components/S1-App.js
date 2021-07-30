import React from 'react'
import { Tap } from './S1-Tap'

export const App = () => {

  let inConsole = () => {
    console.log('This is first button')
  }
  let inAlert = () => {
    alert('This is second button')
  }
  const inConsoleWithArg = (value) => {
    console.log(`Third button label is ${value}`)
  }
  const getArg = (value) => {
    inConsoleWithArg(value)
  }
  return (
    <div className="wrap">
      <Tap label="Console button" onClick={inConsole} />
      <Tap label="Alert button" onClick={inAlert} />
      <Tap label="Argument to console" onClick={getArg} />
    </div>

  )
}


