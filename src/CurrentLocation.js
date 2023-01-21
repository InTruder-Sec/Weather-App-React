import React from "react";
import axios from "axios";

let lat;
let long;
let city;


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
    city = getCountry(lat, long);
    return city;
}

function getCountry(lat, long) {
    let url = "https://geocode.xyz/" + lat + "," + long + '?json=1&auth=476637234707573742155x123533';
    console.log(url);
    axios.get(url)
        .then(response => {
            city = response.data.region;
            return(city);
        })
        .catch(error => {
            city = error;
            return(error);
        });
}


function CurrentLoc() {
    let City = getLocation()
    console.log(City);
    return (
        <div className="location">{City}</div>
    )
}

export default CurrentLoc;
