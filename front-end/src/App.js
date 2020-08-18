import React, { useState } from "react";
import "./App.css";
import Fetching from "./Fetching.js";
import { useForm } from "react-hook-form";

function App() {
  
  const { register, handleSubmit, errors } = useForm();
  const [result, setResult] = useState();
  
  const onSubmit = (data) => {

    let modifiablePattern = /^[2][0-6]\d{9}/;
    let test = modifiablePattern.test(data.phoneNumber);


    if (data.phoneNumber.length === 9) {

      let number = data.phoneNumber;
      let prefix = "27";
      let res = prefix.concat(number);
      let res2 ="number corrected from " + number + " to " + res;
    
      setResult(res2)
      
    }  else if (data.phoneNumber.length > 11) {

      let res3 = "incorrect number"
      console.log(res3);
      setResult(res3)

      } else if (data.phoneNumber.length === 11) {
       
          let prefix = "27"
          let str = data.phoneNumber;
          let sub = str.substring(2)
          let res = prefix.concat(sub);
          let res3 = "number corrected from " + str + " to " + res;
          setResult(res3)

          
        } 
     
    }
  
  return (
    <div className="App">

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>South African Phone Number Validator:</h1>

        <input name="phoneNumber" ref={register({ required: true })} />

        <input type="submit" value="verify" />

        {errors.phoneNumber && <span> This field is required</span>}

      </form>

        <p>{result}</p>
     
      <Fetching />
    </div>
  );
  
}

export default App;
