import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css';

export default function InfoBox({info}){
  let IMG_URL="";

  let HOT_URL= "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=2048x2048&w=is&k=20&c=65dbok-A-9z5YZ6Hx_B2fbWEavkpEfBbzw7OUVYbvWM=";
  let COLD_URL="https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=2048x2048&w=is&k=20&c=Bk3suOKOiKC1gyNbFjlHqYrGB-OyHUwyJu_7Ncujcd8=";
  let RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=";


    
return(

<div className="InfoBox">
<div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150}}
        image={info.humidity> 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity> 80 ? <UmbrellaIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.primary" component={"span"}>
          <p>City: {info.city}</p>
          <p>Country: {info.country}</p>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Min Temperature: {info.tempMin}&deg;C</p>
          <p>Max Temperature: {info.tempMax}&deg;C</p>
          <p>Humidity: {info.humidity}&deg;C</p>
          <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}