import './App.css';


//*****COMPONENTS********/
import InputBox from './components/InputBox';



//import axios from "axios";

function App() {

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


  return (
   <>
   <div className='container-fluid' id='main'>
      <div className='row justify-content-center align-items-center' style={{height:"100vh"}}>
          <div className='col-md-6  half-opacity-bg'>
              <InputBox/>
          </div>
      </div>
   </div>
   </>
  );
}

export default App;
