import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo]= useState({
        city: "Mumbai",
        country: "IN",
        feelsLike: 36.99,
        humidity: 84,
        temp: 29.99,
        tempMax: 29.99,
        tempMin: 29.99,
        weather: "haze",

    });

    let updateInfo= (newInfo)=>{
     setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}