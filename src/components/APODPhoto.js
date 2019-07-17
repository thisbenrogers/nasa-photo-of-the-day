import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';


function APODPhoto() {
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

  // TODO edit with ternary to also display video
  return (
    <section className="cards-list">
      <p>APOD Photo</p>
      {/* <ReactPlayer url={apodData.url} playing /> */}
      {
        apodData.media_type === "video" ?
          <ReactPlayer url={apodData.url} playing /> :
          <img src={apodData.url} alt="Nasa Astonomy Photo of the Day" />
      }
    </section>
  )

}

export default APODPhoto;