import React from 'react'

const CardDisplay = (props) => {

    const {card, handleCardClick} = props

    return (
        <div className='card' name={card.name}>
            <div className='card-image' onClick={handleCardClick}>
                <img src={card.image} alt={card.name} name={card.name}></img>
            </div>
            <div className='card-name'>
                <p>{card.name}</p>
            </div>
        </div>
    )
}

export default CardDisplay