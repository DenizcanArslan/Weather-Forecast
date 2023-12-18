import React,{useState} from 'react'


const InputBox = ({onCityChange}) => {
    const [city,setCity]=useState("");//use state to keep city's name

    const cityChanged=(e)=>{//useState function to set city's name
        const newCity=e.target.value;
        setCity(newCity);
      
    }

    const handleSubmit=(e)=>{//submit event for form
        e.preventDefault();
        onCityChange(city);
        console.log(city);
    }


    
  return (

    <div className="col-md-6  half-opacity-bg">
        <form className="input-group flex-nowrap pt-4 pb-4" onSubmit={handleSubmit}>
             <input type="text" className="form-control " placeholder="Type a city name " aria-label="Type a city name"  onChange={cityChanged} value={city} aria-describedby="addon-wrapping"/>
             <button type="submit" className="btn btn-primary mx-2 rounded-1" id='inputSubmitButton'> Get Weather Forecast</button>
      </form>
    </div>

  )
}

export default InputBox;