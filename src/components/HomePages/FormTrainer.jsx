import { useRef } from 'react'
import { setTrainer } from '../../store/states/trainer.silice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../PokedexPage/style/HomePage.css'

const FormTrainer = () => {    

    const trainerInput = useRef()

    const dispach = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispach(setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <form className='home__form' onSubmit={handleSubmit}>
        <input className='home__input' ref={trainerInput} type="text" />
        <button className='home__btn btn' >Let's go</button>
    </form>
  )
}

export default FormTrainer