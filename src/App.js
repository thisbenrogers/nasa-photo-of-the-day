import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Divider, Grid, Segment, Icon } from 'semantic-ui-react'
import styled from 'styled-components';

import APODPhoto from './components/APODPhoto';
import TextData from './components/TextData';

import "./App.css";

function App() {

  const Wrapper = styled.div`
    height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

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
    <Wrapper>
      <Segment className="App">
        <Grid verticalAlign='middle' columns={2} relaxed="very">
          <Grid.Column>
            <TextData apodData={apodData} />
          </Grid.Column>
          <Grid.Column>
            <APODPhoto apodData={apodData} />
          </Grid.Column>
        </Grid>

        <Divider vertical> <Icon name="space shuttle" /></Divider>
      </Segment>
    </Wrapper>
  );
}

export default App;
