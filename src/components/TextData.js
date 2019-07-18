import React from 'react';
import { Header, Icon } from 'semantic-ui-react';


function TextData(props) {

  // console.log("apodData: ", props.apodData);

  return (
    <>
      <Header as="h1">Nasa's APOD</Header>
      <p>(Astronomy Photo of the day)</p>
      <Header as="h2">"{props.apodData.title}"</Header>
      <p>Date: {props.apodData.date}</p>
      <p>{props.apodData.explanation}</p>
    </>
  )
}

export default TextData;
