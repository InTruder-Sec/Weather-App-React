import React from 'react';
import WeatherImage from './cloudy.png'

function Cards() {
    return (
        <div className='AllCards'>
            <NewCard />
            <NewCard />
            <NewCard />
            <NewCard />
            <NewCard />
        </div>
    )
}

function NewCard() {
    return (
        <div className='newCard'>
            <div className='weekDay'>Friday</div>
            <div className='weekDate'>March 06th, 1:00pm</div>
            <img className='weatherImage' src={WeatherImage} alt='image'></img>
            <div className='temp'>26゜C</div>
            <div className='condition'>Cloudy</div>
        </div>
    )
}

export default Cards;