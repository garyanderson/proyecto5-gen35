import React from 'react'
import PokeCard from './PokeCard'
import '../../components/PokedexPage/style/ListPokemons.css'

const ListPokemons = ({ pokemons }) => {
  return (
    <div className='pokemons__list'>
        {
            pokemons?.map(pokeInfo => (
                <PokeCard 
                    key={pokeInfo.url}
                    pokeInfo={pokeInfo}
                />
            ))
        }
    </div>
  )
}

export default ListPokemons