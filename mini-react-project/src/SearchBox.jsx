import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity]= useState("");
    let [error, setError]= useState(false);

    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="caf7276779c774c9ba3d74e10422a30a";

    let getWeatherInfo= async () =>{
    try{
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let JSONResponse= await response.json();
     // console.log(JSONResponse);
     let result={
        city: city,
        temp: JSONResponse.main.temp,
        tempMax: JSONResponse.main.temp_max,
        tempMin: JSONResponse.main.temp_min,
        humidity: JSONResponse.main.humidity,
        feelsLike: JSONResponse.main.feels_like,
        country: JSONResponse.sys.country,
        weather: JSONResponse.weather[0].description,
       
     };
     console.log(result);
     return result;
    } catch(err){
        throw(err);
    }
     
    };

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };

    let handleSubmit= async (evt) =>{
        try{
        evt.preventDefault();
       // console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);

        }
        catch(err){
            setError(true);
        }
        
       
    };


    return (
        <div className='SearhBox'>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="standard" required value={city} onChange={handleChange}/> <br /> <br />
        <Button  variant="contained" type='submit' size='medium' endIcon={<SearchIcon />}>Search</Button>

        {error && <p style={{color: "red"}}>No such place exists!</p>}
        </form>
        
        </div>
    );
}