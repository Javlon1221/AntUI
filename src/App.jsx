import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Carusel from './components/carusel/Carusel'
import RecipeList from './components/recipe/RecipeList'


const App = () => {
  return (
    <>
      <Header/> 
      <Carusel/>
      <RecipeList/>
      <Footer/>
    </>
  )
}

export default App
