import React, { useState, useEffect } from 'react';
import axios from 'axios';


function APODPhoto() {
  const [apodData, setApodData] = useState({});

  // useEffect(() => {
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //     .then(response => {
  //       console.log("response.data:", response.data);
  //       const apod = response.data;
  //       setApodData(apod);
  //     })
  //     .catch(err => {
  //       console.log("There was an error: ", err);
  //     })
  // }, [apodData])

  return (
    <section className="cards-list">
      <p>APOD Photo</p>
    </section>
  )

}

export default APODPhoto;