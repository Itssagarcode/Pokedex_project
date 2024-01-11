import React from 'react'
import './Pokemon.css'
const Pokemon = ({name, image}) => {
  return (
    <div className='pokemon'>
  
  <div>
        <img className='pokemon-img' src={image} alt="" />
        </div>

      <h2>{name}</h2>
    
    </div>
  )
}

export default Pokemon
