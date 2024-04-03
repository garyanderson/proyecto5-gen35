import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../components/hooks/useFetch'
import ListPokemons from '../components/PokedexPage/ListPokemons'
import SelectType from '../components/PokedexPage/SelectType'
import Pagination from './Pagination'
import '../components/PokedexPage/style/PokedexPage.css'
import title from'../../public/images/title.png'

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')
  const [typeSelector, setTypeSelector] = useState('allPokemons')
  const [page, setpage] = useState(20)
  const [pages, setPages] = useState(0)
  const [counter, setCounter] = useState(65)
  const [countActual, setCountActual] = useState(0)

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${page}&offset=${pages}`
  const [ pokemons, getPokemons, getPokeByType] = useFetch(url)

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
      <div className='pokedex__home__foot'>
        <div className='pokedex__foot'></div>
        <img className='pokedex__img' src={title} alt="" />
        <div className='pokedex__circle'><div className='pokedex__circle__small'></div></div>
      </div>
      <p className='pokedex_message'> <span className='trainer'>Welcome {trainer}</span>, here you can find your favorite pokemon</p>
      <div className='poke__options'>
        <form className='poke__form' onClick={handlesubmit}>
          <input className='home__input' ref={inputSearch} type="text" />
          <button className='home__btn btn' >search</button>
        </form>
        <SelectType 
          setTypeSelector={setTypeSelector}
        />
      </div>
      
      <Pagination 
        setpage={setpage}
        page={page}
        setPages={setPages}
        pages={pages}
        setCounter={setCounter}
        counter={counter}
        countActual={countActual}
        setCountActual={setCountActual}
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
        countActual={countActual}
        setCountActual={setCountActual}
      />
    </div>
  )
}

export default PokedexPage