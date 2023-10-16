import { useState } from 'react'
import SlideFilm from './components/slide'
import Welcome from './components/Welcome'
import films from './components/Films'
import MovieOfDay from './components/Today';
import './App.css'

function App() {

  return (
    <>
      <Welcome />
      <MovieOfDay />
      <SlideFilm />
    </>
  )
}

export default App
