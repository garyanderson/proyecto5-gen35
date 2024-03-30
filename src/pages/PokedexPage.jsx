import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../components/hooks/useFetch'
import ListPokemons from '../components/PokedexPage/ListPokemons'
import SelectType from '../components/PokedexPage/SelectType'
import Pagination from './Pagination'

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')
  const [typeSelector, setTypeSelector] = useState('allPokemons')
  const [page, setpage] = useState(20)
  const [pages, setPages] = useState(0)
  const [counter, setCounter] = useState(0)

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${page}&offset=${pages}`
  const [ pokemons, getPokemons, getPokeByType] = useFetch(url)
//console.log(pages)                                      // conle.log()
  useEffect(() => {
    if(typeSelector === 'allPokemons'){
        getPokemons()
    }else{
      getPokeByType(typeSelector)
    }
  }, [typeSelector, url])

  const handlesubmit = e => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim())
  }

  const pokemonsFiltered = pokemons?.results.filter(poke =>{
     return poke.name.includes(pokeSearch)
  })

  return (
    <div className='pokedex'>

      <p className='pokedex_message'>Welcome <span>{trainer}</span>, here you can find your favorite pokemon</p>
      <form className='pokeform' onClick={handlesubmit}>
        <input className='pokeform__input' ref={inputSearch} type="text" />
        <button className='pokeform__button' >search</button>
      </form>
      <SelectType 
      setTypeSelector={setTypeSelector}
      />
      <Pagination 
        setpage={setpage}
        page={page}
        setPages={setPages}
        pages={pages}
        setCounter={setCounter}
        counter={counter}
      />
      <ListPokemons 
        pokemons={pokemonsFiltered}
      />
      <Pagination 
        setpage={setpage}
        page={page}
        setPages={setPages}
        pages={pages}
        setCounter={setCounter}
        counter={counter}
      />
    </div>
  )
}

export default PokedexPage