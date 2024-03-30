import { useRef } from 'react'
import { setTrainer } from '../../store/states/trainer.silice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
    <form onSubmit={handleSubmit}>
        <input ref={trainerInput} type="text" />
        <button>Lets start</button>
    </form>
  )
}

export default FormTrainer