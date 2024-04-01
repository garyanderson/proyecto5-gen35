import React from 'react'
import FormTrainer from '../components/HomePages/FormTrainer'
import title from '../../public/images/title.png'
import '../components/PokedexPage/style/HomePage.css'

const Homepage = () => {
  return (
    
    <div className='home'>
      <img className='home__img' src={title} alt="" />
      <h2 className='home__greeting'>¡hi trainer!</h2>
      <p className='home__message'>Too see pokemon's information, tell me your trainer's name</p>
      <FormTrainer />
      <div className='home__foot'>        
        <div className='foot' ></div>
        <div className='circle'><div className='circle__small'></div></div>        
      </div>
    </div>
  )
}

export default Homepage