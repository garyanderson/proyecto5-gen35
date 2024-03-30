import '../components/PokedexPage/style/Pagination.css'
import start from '../../public/images/start.png'
import prev from '../../public/images/prev.png'
import next from '../../public/images/next.png'
import end from '../../public/images/end.png'
import { useRef } from 'react'

const Pagination = ({ setpage, page, setPages, pages, setCounter, counter }) => {
    
    const handleStart = () => {
        setPages(0)
        setCounter(0)
    }
    const handlePrev = () => {
        setCounter(counter--)
        const prev = page*counter
        setPages(prev)
    }
    const handleNext = () => {
        setCounter(counter++)
        const next = page*counter
        setPages(next)
    }
    const handleEnd = () =>{
        const end = (Math.ceil(1302 / page)-1)*page
        setPages(end)
    }

    const number_card = useRef(20)

    const handleSubmit = e => {
        e.preventDefault()
        setpage(number_card.current.value)
    }
console.log(pages)
  return (
    <div className='nav'>
        <div className='nav__pagin'>
            <img onClick={handleStart} className='nav__start' src={start} alt="" />
            <img onClick={handlePrev} className='nav__prev' src={prev} alt="" />
            <img onClick={handleNext} className='nav__next' src={next} alt="" />
            <img onClick={handleEnd} className='nav__end' src={end} alt="" />
        </div>
        <form className='nav__form' >
            <label className='nav__label'>Cards</label>
            <input className='nav__input' type="number" ref={number_card} placeholder={page}/>
            <button className='nav__btn' onClick={handleSubmit}>submit</button>
        </form>
    </div>
    
  )
}

export default Pagination