import React, { useState } from 'react'
import Characters from './DeckComponents/Characters.json'
import Deck from './DeckComponents/Deck'
import Scoreboard from './Scoreboard/Scoreboard'

const Game = () => {
    
    const [deck, setDeck] = useState(Characters)
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [cardsPlayed, setCardsPlayed] = useState([])

    const handleCardClick = (e) => {
        e.preventDefault()
        const card = e.target
        shuffleDeck()
        turn(card.name)
    }

    const turn = (card) => {
        if (cardsPlayed.includes(card)){
            resetGame()
        }
        else {
            incrementScore()
            setCardsPlayed((prevState)=> [...prevState, card])
        }
    }

    const shuffleDeck = () => {
        const newDeck = shuffle(deck)
        setDeck(newDeck)
    }

    const resetGame = () => {
        setDeck(Characters)
        setCardsPlayed([])
        setCurrentScore(0)
    }

    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex

        while (0 !== currentIndex){
            randomIndex = Math.floor(Math.random()*currentIndex)
            currentIndex -= 1

            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }

    const incrementScore = () => {
        const newScore = currentScore+1
        setCurrentScore(newScore)

        if (newScore>bestScore){
            setBestScore(newScore)
        }
    }

    return(
        <div className='game-box'>
            <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
            <Deck deck={deck} handleCardClick={handleCardClick}/>
        </div>
    )
}

export default Game