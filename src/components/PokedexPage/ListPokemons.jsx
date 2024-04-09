import { useState, useEffect } from 'react'
import PokeCard from './PokeCard'
import start from '../../../public/images/start.png'
import prev from '../../../public/images/prev.png'
import next from '../../../public/images/next.png'
import end from '../../../public/images/end.png'
import '../../components/PokedexPage/style/ListPokemons.css'

const ListPokemons = ({ pokemons, startIndex, endIndex, quantyPage, setPage, page }) => {

const [blockPage, setBlockPage] = useState(1)
const [pagesPerBlock, setpagesPerBlock] = useState(5)

const initialPageBlock = (blockPage - 1) * pagesPerBlock
const endPageBlock = initialPageBlock + pagesPerBlock

useEffect(() => {
    setBlockPage(Math.ceil(page / pagesPerBlock))
}, [page])


    const arrPages = []
    for(let x = 1; x <= quantyPage; x++){
      arrPages.push(x)
    }
  
  console.log(arrPages)

  const changePage = pageNumber => setPage(pageNumber)

  const handlePrev = () => {
   setPage(page-1)
  }

  const handleNext = () => {
    setPage(page+1)
  }

  return (
    <div>
      
      <div className='pokemons__list'>
        {
            pokemons?.slice(startIndex, endIndex).map(pokeInfo => (
                <PokeCard 
                    key={pokeInfo.url}
                    pokeInfo={pokeInfo}
                />
            ))
        }
    </div>
    </div>
    
  )
}

export default ListPokemons