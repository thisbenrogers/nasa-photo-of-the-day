import React, { useState } from 'react';
import ReactPlayer from 'react-player'



function APODPhoto(props) {


  return (
    <section className="cards-list">
      {
        props.apodData.media_type === "video" ?
          <ReactPlayer className="media" url={props.apodData.url} playing /> :
          <img className="media" src={props.apodData.url} alt="Nasa Astonomy Photo of the Day" />
      }
    </section >
  )

}

export default APODPhoto;