import React,{useState} from 'react'


const InputBox = () => {
    const [city,setCity]=useState("");//use state to keep city's name

    const getCity=(e)=>{//useState function to set city's name
        setCity(e.target.value);
        }


    const handleSubmit=(e)=>{//submit event for form
        e.preventDefault();
        console.log(city);
    }


    
  return (
    <div className="container">
        <form className="input-group flex-nowrap pt-4 pb-4" onSubmit={handleSubmit}>
             <input type="text" className="form-control " placeholder="Type a city name " aria-label="Type a city name"  onChange={getCity} value={city} aria-describedby="addon-wrapping"/>
             <button type="submit" className="btn btn-primary mx-2 rounded-1" id='inputSubmitButton'> Get Weather Forecast</button>
      </form>
    </div>
  )
}

export default InputBox;