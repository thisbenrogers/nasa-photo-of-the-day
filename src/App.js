import React, { useState, useEffect } from "react";
import axios from 'axios';



import APODPhoto from './components/APODPhoto';
import Header from './components/Header';

import "./App.css";

function App() {
  const [apodData, setApodData] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=acaE6QqfjcI4Nqk2RdyPiuXYlKpuFaSPObtD6KXp")
      .then(response => {
        console.log("response.data:", response.data);
        const apod = response.data;
        setApodData(apod);
      })
      .catch(err => {
        console.log("There was an error: ", err);
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <APODPhoto apodData={apodData} />
    </div>
  );
}

export default App;
