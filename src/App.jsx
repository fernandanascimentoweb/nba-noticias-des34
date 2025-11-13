import React from 'react'
import Header from './components/Header/Header'
import GameCard from './components/GameCard/GameCard'
import PlayerStats from './components/PlayerStats/PlayerStats'
import Footer from './components/Footer/Footer'
import NewsSlider from './components/NewsSlider/NewsSlider'



const App = () => {
  return (
    <div>
      <Header />
      <GameCard />
      <PlayerStats />
      <NewsSlider />
      <Footer />
    </div>  
  )
}

export default App