import React from 'react';

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
            Hello world
        </div>
    )
}

export default Cards;