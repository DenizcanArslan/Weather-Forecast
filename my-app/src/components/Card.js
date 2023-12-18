import React,{useState} from 'react';
import InputBox from './InputBox';

const Card = ({city}) => {



  return (
    <div  className='row justify-content-center align-items-center'>
    <div className="col d-flex justify-content-center ">
    <p className='text-light'>
    {city}
    </p>   
    </div>
    <div className="col d-flex justify-content-center ">
      One of three columns
    </div>
    <div className="col d-flex justify-content-center ">
      One of three columns
    </div>
  </div>
  
  )
}

export default Card;




  /*    
  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: 'Antalya',
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
      console.log(response.data.current.condition.text);
      console.log(response.data.forecast.forecastday[0]);
     
    } catch (error) {
      console.error(error);
    }
  };
  
  // fetchData fonksiyonunu çağırarak asenkron işlemi başlatın
  fetchData();
 
  */
