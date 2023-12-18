import React,{useState} from 'react';


import axios from "axios";



const Card = ({city}) => {

    const [temp,updateTemp]=useState("");
    const [feelsLike,updatefeelsLike]=useState("");
    const [icon ,updateIcon]=useState();
    const [humidity,updateHumidity]=useState("");
    const [wind,updateWind]=useState("");   
    const [date,updateDate]=useState("");  

    const Days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: `${city}`,
        days: '3'
      },
      headers: {
        'X-RapidAPI-Key': '2227885efcmsh8bf40275c7396a1p1ef0e4jsn11ad1c709aad',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios(options);
      console.log(response.data);
      updateTemp(response.data.current.temp_c)
      updatefeelsLike(response.data.current.feelslike_c);
      updateIcon(response.data.current.condition.icon);
      updateHumidity(response.data.current.humidity);
      updateWind(response.data.current.wind_kph);
      updateDate(response.data.location.localtime);
    //  console.log(icon);
   // console.log(response.data.current);
    //  console.log(response.data.forecast.forecastday[0]);
     
    } catch (error) {
      console.error(error);
    }
  };
  
  // fetchData fonksiyonunu çağırarak asenkron işlemi başlatın
  fetchData();
 
  



  return (
    <div  className='row justify-content-center align-items-center'>
    <div className="col d-flex justify-content-center ">
        <div className="card text-center card-Background text-white">
    <div className="card-header">
        <div className='row'>
           <div className='col-6  d-flex flex-column align-items-center justify-content-center'>
             <p className='card-text text-uppercase fw-bold'>{city}</p>
           </div>
           <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
           <img src={icon} alt="icon-for-current-weather-situation"/>
           </div>
        </div>
      
    </div>
    <div className="card-body">
    <div className='row'>
        <div className='col d-flex flex-column align-items-center justify-content-center'>
            <p className="card-text">Current Temperature: {temp}°C</p>

        </div>
        <div className='col d-flex flex-column align-items-center justify-content-center'>
            <p className="card-text">Feels Like: {feelsLike}°C</p>

        </div>
    </div>
    </div>

    <div className='row'>
        <div className='col d-flex flex-column align-items-center justify-content-center'>
            <p className="card-text">Humidity {humidity}%</p>

        </div>
        <div className='col d-flex flex-column align-items-center justify-content-center'>
            <p className="card-text">Wind: {wind}°km/h</p>

        </div>
    </div>





    <div className="card-footer  text-white card-footer-bg mt-3">
    <div className='row'>
   
        <div className='col d-flex flex-column align-items-center justify-content-center'>
            <p className="card-text">{date}</p>
        </div>
    </div>

            
    </div>
    </div>  
    </div>

  </div>
  
  )
}

export default Card;




