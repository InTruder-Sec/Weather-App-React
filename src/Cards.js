import React from 'react';
import WeatherImage from './unknown.png'
import loading from './loading.png';


function Cards() {
    return (
        <div className='AllCards'>
            <LoadingSVG />
            <NewCard1 />
            <NewCard2 />
            <NewCard3 />
            <NewCard4 />
            <NewCard5 />
        </div>
    )
}

function LoadingSVG() {
    return (
        <img src={loading} id="loading" className="loadingImg linear infinite" alt='loading...' />
    )
}

function NewCard1() {
    return (
        <div className='newCard newCard0' id="showCards0">
            <div className='weekDay' id="weekDay0">Friday</div>
            <div className='weekDate' id="weekDate0">March 06th, 1:00pm</div>
            <img className='weatherImage' id="weatherImg0" src={WeatherImage} alt='image'></img>
            <div className='temp' id="temp0">26゜C</div>
            <div className='condition' id="condition0">Cloudy</div>
        </div>
    )
}

function NewCard2() {
    return (
        <div className='newCard' id="showCards1">
            <div className='weekDay' id="weekDay1">Friday</div>
            <div className='weekDate' id="weekDate1">March 06, 01:00</div>
            <img className='weatherImage' id="weatherImg1" src={WeatherImage} alt='image'></img>
            <div className='temp' id="temp1">26゜C</div>
            <div className='condition' id="condition1">Cloudy</div>
        </div>
    )
}
function NewCard3() {
    return (
        <div className='newCard' id="showCards2">
            <div className='weekDay' id="weekDay2">Friday</div>
            <div className='weekDate' id="weekDate2">March 06th, 1:00pm</div>
            <img className='weatherImage' id="weatherImg2" src={WeatherImage} alt='image'></img>
            <div className='temp' id="temp2">26゜C</div>
            <div className='condition' id="condition2">Cloudy</div>
        </div>
    )
}
function NewCard4() {
    return (
        <div className='newCard' id="showCards3">
            <div className='weekDay' id="weekDay3">Friday</div>
            <div className='weekDate' id="weekDate3">March 06th, 1:00pm</div>
            <img className='weatherImage' id="weatherImg3" src={WeatherImage} alt='image'></img>
            <div className='temp'  id="temp3">26゜C</div>
            <div className='condition' id="condition3">Cloudy</div>
        </div>
    )
}
function NewCard5() {
    return (
        <div className='newCard' id="showCards4">
            <div className='weekDay' id="weekDay4">Friday</div>
            <div className='weekDate' id="weekDate4">March 06th, 1:00pm</div>
            <img className='weatherImage' id="weatherImg4" src={WeatherImage} alt='image'></img>
            <div className='temp' id="temp4">26゜C</div>
            <div className='condition' id="condition4">Cloudy</div>
        </div>
    )
}

export default Cards;