import React from 'react'
import './playerstats.css'
import jog1 from '../../assets/Ellipse 3.png'
import jog2 from '../../assets/Ellipse 3 (1).png'
import jog3 from '../../assets/Ellipse 4.png'
import jog4 from '../../assets/Ellipse 5.png'


const players = [
    { 
        id: 1,
        name: "De’Aaron Fox", 
        team: "SAC #5 G", 
        ppg: 25.7, 
        rpg: 4.7, 
        apg: 8.7, 
        img: jog1,
    },
    { 
        id: 2,
        name: "Stephen Curry", 
        team: "GSW #30 G", 
        ppg: 22.7, 
        rpg: 3.7, 
        apg: 4.7, 
        img: jog2,
    },
    { 
        id: 3,
        name: "Jayson Tatum", 
        team: "BOS #6 G", 
        ppg: 25.7, 
        rpg: 4.7, 
        apg: 8.7, 
        img: jog3,
    },
    { 
        id: 4,
        name: "Jalen Brunson", 
        team: "NYK #30 G", 
        ppg: 22.7, 
        rpg: 3.7, 
        apg: 4.7, 
        img: jog4,
    }
]

const PlayerStats = () => {

  return (
    <div className='player-stats'>
        <h4>Melhores Jogadores</h4>

        <table>
            <thead>
                <tr>
                    <th>Jogador</th>
                    <th>PPG</th>
                    <th>RPG</th>
                    <th>APG</th>
                </tr>
            </thead>

            <tbody>
                {players.map((player) => (
                    <tr key={player.id}>
                        <td>
                            <img src={player.img} alt={player.name} />
                            <div>
                                <strong>{player.name}</strong>
                                <p>{player.team}</p>
                            </div>
                        </td>
                        <td>{player.ppg}</td>
                        <td>{player.rpg}</td>
                        <td>{player.apg}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default PlayerStats