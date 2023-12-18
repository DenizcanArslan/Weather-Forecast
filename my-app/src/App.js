import './App.css';

import React,{useState} from 'react';

//*****COMPONENTS********/
import InputBox from './components/InputBox';
import Card from './components/Card';
import Header from './components/Header';



function App() {

const [city,setCity]=useState("");

const handleCityChange=(newCity)=>{
  setCity(newCity);
}


  return (
   <>
   <div className='container-fluid ' id='main'>
   <div className='row justify-content-center align-items-center ' style={{height:"100vh"}}>
   <Header/>


              <InputBox onCityChange={handleCityChange}/>
              { city && <Card city={city}/>}
   </div>
   </div>

   </>
  );
}

export default App;
