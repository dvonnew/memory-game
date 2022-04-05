import React from 'react'

const Scoreboard = (props) => {

    const {currentScore, bestScore} = props
    
    return (
        <div className='score-box'>
            <h3 className= 'current score'>Current Score: {currentScore}</h3>
            <h3 className= 'high score'>High Score: {bestScore}</h3>
        </div>
    )  
}

export default Scoreboard