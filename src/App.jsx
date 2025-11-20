import React from 'react'
import Home from './pages/Home'
import Customizer from './pages/Customizer'
import Canvas from './canvas/Index'
import CanvasModel from './canvas/Index'


const App = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <CanvasModel />
      <Customizer />

    </main>
  )
}

export default App;