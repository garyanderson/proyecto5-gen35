import '../components/PokedexPage/style/Pagination.css'
import start from '../../public/images/start.png'
import prev from '../../public/images/prev.png'
import next from '../../public/images/next.png'
import end from '../../public/images/end.png'
import { useRef } from 'react'

const Pagination = ({ setpage, page, setPages, pages, setCounter, counter, countActual, setCountActual }) => {
    let decimal = 0
    
    const handleStart = () => {
        setPages(0)
        setCountActual(0)
    }
    const handlePrev = () => {
        setCountActual(countActual-1)
        const prev = page*countActual
        setPages(prev)
    }
    const handleNext = () => {
        setCountActual(countActual+1)
        const next = page*countActual
        setPages(next)
    }
    const handleEnd = () =>{
        const end = (Math.ceil(1302 / page))*page
        setPages(end)
    }

    const number_card = useRef(20)

    const handleSubmit = e => {
        e.preventDefault()
        
        setpage(number_card.current.value)
        if(!Number.isInteger(page)){
            decimal = 1
        }else{
            decimal = 0
        }         
        setCounter(Math.ceil(1302/page)-decimal)
        setPages(counter*page)      
    }
        
    console.log(`${decimal}`)
      /*  const elementos = [];
    for (let x=0; x<pages; x++){
        elementos.push(<div className='numbers-pages btn' key={x}>{x+1}</div>)
    }*/
    
    


  return (
    <div className='nav'>
        <div className='nav__pagin'>
            <img onClick={handleStart} className='nav__start btn' src={start} alt="" />
            <img onClick={handlePrev} className='nav__prev btn' src={prev} alt="" />
               
            <img onClick={handleNext} className='nav__next btn' src={next} alt="" />
            <img onClick={handleEnd} className='nav__end btn' src={end} alt="" />
        </div>
        <form className='nav__form' >
            <label className='nav__label'>Cards</label>
            <input className='nav__input' type="number" ref={number_card} placeholder={page}/>
            <button className='nav__btn btn' onClick={handleSubmit}>submit</button>
        </form>
    </div>
    
  )
}

export default Pagination