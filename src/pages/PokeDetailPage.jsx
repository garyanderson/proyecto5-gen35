import { useParams } from 'react-router-dom'
import useFetch from '../components/hooks/useFetch'
import { useEffect } from 'react'
import '../components/PokedexPage/style/PokeDetailPage.css'
import '../components/PokedexPage/style/PokeCard.css'
import title from'../../public/images/title.png'

const PokeDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])

  console.log(pokemon)

  return (
    <div className='poke__detail'>
      <div className='pokedex__home__foot'>
        <div className='pokedex__foot'></div>
        <img className='pokedex__img' src={title} alt="" />
        <div className='pokedex__circle'><div className='pokedex__circle__small'></div></div>
      </div>
      <img className='detail__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" /> 
      <div className='detail__detail'>  
        <header className={`detail__header header-color-${pokemon?.types[0].type.name}`}>
        </header>
        <span className='detail_id'>#{pokemon?.id}</span>
        <section className='detail__dates'>
          <div className='container_name'>
            <hr className='hr-name1'/>
            <h2 className='detail__name'>{pokemon?.name}</h2>
            <hr className='hr-name2'/>
          </div>            
            <div className='container_dats'>
              <div className='container_weight'> 
                <p className='detail__date1'>weight</p>
                <p className='detail__value1'>{pokemon?.weight}</p>
              </div>
              <div className='continer_height'>
                <p className='detail__date2'>height</p>              
                <p className='detail__value2'>{pokemon?.height}</p>
              </div>              
            </div>            
        </section>
        <div className='container'>
          <section className='detail__type'>
         <p className='detail__label'>types</p>
          {
            pokemon?.types.map(typeInfo => (
              <span className={`detail__value header-color-${typeInfo.type.name}`} key={typeInfo.type.url}> {typeInfo.type.name} </span>
            ))
          }
        </section>
        <section className='detail__abilities'>
          <p className='detail__label'>abilities</p>
          {
            pokemon?.abilities.map(abilitiesInfo => (
              <span className='detail__value' key={abilitiesInfo.ability.url}> {abilitiesInfo.ability.name} </span>
            ))
          }
        </section>
        </div>
              
        <section className='detail__stats'>
          {
            pokemon?.stats.map(statInfo => (
              <div className='detail__stat' key={statInfo.stat.url}>
                <span className='detail__stat__name'>{statInfo.stat.name }</span>
                <span className='detail__stat__value'>{statInfo.base_stat}/255</span>
                <div className='stats__bar'>
                  <div  className='stats__line' style={{width: statInfo.base_stat/255*100+'%'}}></div>
                </div>
              </div>
            ))
          }
        </section>
      </div>
      
      <div className='detail__movements'>
        <div className='container__movements'>
          <span className='detail__movement'>Movements</span>
                  {
                    pokemon?.moves.map(moveInfo =>(
                      <span className='detail__movement__name' key={moveInfo.move.url}>{moveInfo.move.name}</span>
                    ))
                  }
        </div>
        
      </div>
    </div>
  )
}

export default PokeDetailPage