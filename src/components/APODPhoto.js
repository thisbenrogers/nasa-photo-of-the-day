import React from 'react';
import ReactPlayer from 'react-player'
import { Image, Container } from 'semantic-ui-react';



function APODPhoto(props) {


  return (
    <Container className="apod-photo">
      {
        props.apodData.media_type === "video" ?
          <ReactPlayer className="media" url={props.apodData.url} playing /> :
          <Image className="media" src={props.apodData.url} alt="Nasa Astonomy Photo of the Day" />
      }
    </Container >
  )

}

export default APODPhoto;