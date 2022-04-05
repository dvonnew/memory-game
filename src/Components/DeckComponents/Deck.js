import React from 'react'
import CardDisplay from './CardDisplay'

const Deck = ({deck, handleCardClick}) => {

    const displayCards = deck.slice(0,3)
    return(
        <div className='card-container'>
            {displayCards.map((card)=> (<CardDisplay card={card} key={card.id} handleCardClick={handleCardClick}/>))}
        </div>
    )
}

export default Deck