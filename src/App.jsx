// import { useState } from 'react'
import './App.css'
import Header from './sections/Header/Header'
import Show from './sections/Show/Show'
import Steve from './sections/Steve/Steve'
import Crowd from './sections/Crowd/Crowd'
import Other from './sections/Other/Other'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Show />
      <Steve />
      <Crowd />
      <Other />
    </>
  )
}

export default App

// Features to add:

// Continuous scroll
// try speed tips from chat