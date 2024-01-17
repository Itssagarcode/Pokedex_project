import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Pokedex from '../components/Pokedex/Pokedex'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'

const CustomRoutes = () => {
  return (
    
<Routes>
    <Route path="/" element={<Pokedex/>}></Route>
    <Route path='/pokemon/:id' element={<PokemonDetails/>}></Route>
</Routes>
  )
}

export default CustomRoutes
