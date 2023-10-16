import { useState } from 'react'
import WelcomeFilm from './components/Welcome'
import films from './components/Films'
import MovieOfDay from './components/Today';


function App() {

  return (
    <>
      <MovieOfDay />
    <Welcome/>
    </>
  )
}

export default App
