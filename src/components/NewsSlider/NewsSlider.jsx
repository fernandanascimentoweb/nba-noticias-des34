import React from 'react'
import './newsslider.css'
import lebron from '../../assets/news01.png'
import kobe from '../../assets/kobe.png'



const NewsSlider = () => {
  return (
    <div className='news-slider'>
        <button className="arrow left">❮</button>
        <div className='news-cards'>
            <div className='news'>
                <img src={lebron} alt="Lebron" />
                <p>
                    Aos 39 anos, LeBron James atingiu a marca de 40 mil pontos na temporada regular da NBA.
                </p>
            </div>

            <div className='news'>
                <img src={kobe} alt="Kobe" />
                <p>
                    Morte de Kobe Bryant: piloto de helicóptero ficou desorientado com mau tempo.
                </p>
            </div>
        </div>
        <button className="arrow right">❯</button>
    </div>
  )
}

export default NewsSlider