import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fetching.css"


const Fetching = () => {
  const [corrects, setCorrect] = useState([]);
  const [incorrects, setIncorrect] = useState([]);
  const [addedprefixes, setAddedprefixes] = useState([]);
  const [prefixs, setPrefixs] = useState([]);

  useEffect(() => {
    axios
      .get("/phonenumbers")
      .then((res) => {
        setCorrect(res.data.correctNumbers);
        setIncorrect(res.data.incorrectNumbers);
        setPrefixs(res.data.PreFixModified);
        setAddedprefixes(res.data.AddedPrefix);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      
    <div>
      <h1>Correct Phone Numbers:</h1>
      <ul>
        {corrects.map((correct) => (
          <h1 key={correct.id}>{correct.sms_phone}</h1>
        ))}
      </ul>

      <h1>Corrected Phone Numbers - Added +27</h1>
      <ul>
        {addedprefixes.map((addedprefix) => (
          <h1 key={addedprefix.id}>{addedprefix.result}</h1>
        ))}
      </ul>
      <h1>Corrected Phone Numbers - Changed prefix to +27 </h1>
      <ul>
        {prefixs.map((prefixmodified) => (
          <h1 key={prefixmodified.id}>{prefixmodified.result}</h1>
        ))}
      </ul>

      <h1>Incorrect Phone Numbers:</h1>
      <ul>
        {incorrects.map((incorrect) => (
          <h1 key={incorrect.id}>{incorrect.sms_phone}</h1>
        ))}
      </ul>
    </div>
  );
};

export default Fetching;
