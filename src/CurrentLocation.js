/* eslint-disable default-case */
import React from "react";
import axios from "axios";
import Clear from './clear.png';
import Rainy from './rainy.png';
import Cloudy from './cloudy.png';

let lat;
let long;
let city;
let weather;
let date;
let e;




function getLocation() {
    if (navigator.geolocation) {
        return (navigator.geolocation.getCurrentPosition(mapCoords));
      } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function mapCoords(position) {
    lat = position.coords.latitude;
    long =  position.coords.longitude;
    console.log(lat + " " + long);
    getCountry(lat, long);
    getWeather(lat, long);
}

function getWeather(lat, long) {
    let weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=ae8ef316f929e83a1e9a01e829e33d89";
    axios.get(weatherUrl)
        .then(response => {
            weather = response.data;
            document.getElementById("loading").style.opacity = 0;
            for (let t=0; t<5; t++ ){
                // eslint-disable-next-line default-case
                switch (t) {
                    case 0:
                        e = 2;
                        break
                    case 1:
                        e = 8;
                        break
                    case 2:
                        e = 14;
                        break
                    case 3:
                        e = 24
                        break
                    case 4:
                        e = 32;
                        break
                }
                    
                let currtemp = weather.list[e].main.temp;
                currtemp = Math.floor(currtemp - 273);
                document.getElementById("temp" + t).innerText = currtemp + "゜C";
                let currWeather = weather.list[e].weather[0].main;
                if (currWeather === "Clear") {
                    document.getElementById("weatherImg" + t).src = Clear;
                } else if (currWeather === "Rainy") {
                    document.getElementById("weatherImg" + t).src = Rainy;
                } else if (currWeather === "Clouds") {
                    document.getElementById("weatherImg" + t).src = Cloudy;
                }

                document.getElementById("condition" + t).innerText = currWeather;
                date = new Date(weather.list[e].dt_txt);
                let day = date.getDay();
                let tempDate = date.getDate();
                let month = date.getMonth();
                let hours = date.getHours();
                let min = date.getMinutes();

                // eslint-disable-next-line default-case
                switch (day) {
                    case 1:
                        day = "Monday";
                        break;
                    case 2:
                        day = "Tuesday";
                        break;
                    case 3:
                        day = "Wednesday";
                        break
                    case 4:
                        day = "Thrusday";
                        break;
                    case 5:
                        day = "Friday";
                        break;
                    case 6:
                        day = "Saturday";
                        break;
                    case 0:
                        day = "Sunday";
                        break;
                }

                document.getElementById("weekDay" + t).innerText = day;

                switch (month) {
                    case 0:
                        month = "January";
                        break;
                    case 1:
                        month = "February";
                        break;
                    case 2:
                        month = "March";
                        break;
                    case 3:
                        month = "April";
                        break;
                    case 4:
                        month = "May";
                        break;
                    case 5:
                        month = "June";
                        break;
                    case 6:
                        month = "July";
                        break;
                    case 7:
                        month = "August";
                        break;
                    case 8:
                        month = "September";
                        break; 
                    case 9:
                        month = "October";
                        break;
                    case 10:
                        month = "November";
                        break;
                    case 11:
                        month = "December";
                        break;
                }

                if (hours<10) {
                    hours = "0" + hours;
                }

                let createDate = month + " " + tempDate + ", " + hours + ":" + min + "0";
                document.getElementById("weekDate" + t).innerText = createDate;
                // document.getElementById("weekDay" + t).innerText = day;


                document.getElementById("showCards" + t).style.opacity = 0.8;
            }
            
            
        })
        .catch(error => {
            weather = error;
            return(error);
        });
}

function getCountry(lat, long) {
    let url = "https://geocode.xyz/" + lat + "," + long + '?json=1&auth=476637234707573742155x123533';
    console.log(url);
    axios.get(url)
        .then(response => {
            city = response.data.region;
            document.getElementById("location").innerText = city;
        })
        .catch(error => {
            city = error;
            return(error);
        });
}


function CurrentLoc() {
    getLocation()
    return (
        <div className="location" id="location">...</div>
        
    )
}

export default CurrentLoc;
