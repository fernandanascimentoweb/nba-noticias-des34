import React from 'react'
import './header.css'
import logonba from '../../assets/logo-nba.png'
import lakers from '../../assets/Frame 48.png'
import chicago from '../../assets/player.png'



const Header = () => {
  return (
    <header className='header'>
        <div className='overlay'></div>
        <div className='content'>
            <img src={logonba} alt="NBA" className='nba-logo' />
            <div className='teams'>
                <div className='team'>
                    <img src={lakers} alt="Lakers" />
                    <p>Lakers</p>
                    <span>60%</span>
                </div>
                <div className='team'>
                    <img src={chicago} alt="Chicago" />
                    <p>Bulls</p>
                    <span>40%</span>
                </div>
            </div>
            <button className='info'>JOGO 5: LAK 3-1</button>
        </div>
    </header>
  )
}

export default Header