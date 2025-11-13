import React from 'react'
import './gamecard.css'
import kings from '../../assets/Frame 41.png'
import war from '../../assets/Frame 42.png'
import cel from '../../assets/cleveland-cavaliers_416x416-removebg-preview 1.png'
import kn from '../../assets/New_York_Knicks_logo 1.png' 


const GameCard = () => {
  return (
    <div className="game-card" >
      <div className='box' style={{ background: `linear-gradient(90deg, #5a2d81 50%, #fdb927 50%)`}} >
        <h4 className='letras'>JOGO DE HOJE</h4>

        <div className='texto'>
                              
          <div className='bloco'>
              <img src={kings} alt="Kings" />
              <span>Kings</span>
          </div>
        
          <div className="game-info">
            <p>Jogo 4: GSW 2-1</p>
            <h2>1:00 PM</h2>
          </div>
  
          <div className='bloco'>
            <img src={war} alt='Warriors' />
            <span>Warriors</span>
          </div>
        
        </div>
      </div>     

      <div className='box' style={{ background: `linear-gradient(90deg, #007a33 50%, #f58426 50%)`}} >
        <h4 className='letras'>JOGO DE HOJE</h4>
        
        <div className='texto'>
          
          <div className='bloco'>
            <img src={cel} alt="Celtics" />
            <span>Celtics</span>
          </div>
        
          <div className="game-info">
            <p>Jogo 4 BOS 2-1</p>
            <h2>1:00 PM</h2>
          </div>
  
          <div className='bloco'>
            <img src={kn} alt='Knicks' />
            <span>Knicks</span>
          </div>
        
      </div>
      </div>
    
    </div>
  )
}

export default GameCard