import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Header, Label, Icon, Divider, Container } from 'semantic-ui-react';
import { useForm } from '../helpers/FormHooks';

const yearOptions = [
  { key: '2019', value: '2019', text: '2019' },
  { key: '2018', value: '2018', text: '2018' },
  { key: '2017', value: '2017', text: '2017' },
  { key: '2016', value: '2016', text: '2016' },
  { key: '2015', value: '2015', text: '2015' },
  { key: '2014', value: '2014', text: '2014' },
  { key: '2013', value: '2013', text: '2013' },
  { key: '2012', value: '2012', text: '2012' },
  { key: '2011', value: '2011', text: '2011' },
  { key: '2010', value: '2010', text: '2010' },
  { key: '2009', value: '2009', text: '2009' },
  { key: '2008', value: '2008', text: '2008' },
  { key: '2007', value: '2007', text: '2007' },
  { key: '2006', value: '2006', text: '2006' },
  { key: '2005', value: '2005', text: '2005' },
  { key: '2004', value: '2004', text: '2004' },
  { key: '2003', value: '2003', text: '2003' },
  { key: '2002', value: '2002', text: '2002' },
  { key: '2001', value: '2001', text: '2001' },
  { key: '2000', value: '2000', text: '2000' }
]

const monthOptions = [
  { key: '01', value: '01', text: 'January' },
  { key: '02', value: '02', text: 'February' },
  { key: '03', value: '03', text: 'March' },
  { key: '04', value: '04', text: 'April' },
  { key: '05', value: '05', text: 'May' },
  { key: '06', value: '06', text: 'June' },
  { key: '07', value: '07', text: 'July' },
  { key: '08', value: '08', text: 'August' },
  { key: '09', value: '09', text: 'September' },
  { key: '10', value: '10', text: 'October' },
  { key: '11', value: '11', text: 'November' },
  { key: '12', value: '12', text: 'December' }
]

const dayOptions = [
  { key: '01', value: '01', text: '01' },
  { key: '02', value: '02', text: '02' },
  { key: '03', value: '03', text: '03' },
  { key: '04', value: '04', text: '04' },
  { key: '05', value: '05', text: '05' },
  { key: '06', value: '06', text: '06' },
  { key: '07', value: '07', text: '07' },
  { key: '08', value: '08', text: '08' },
  { key: '09', value: '09', text: '09' },
  { key: '10', value: '10', text: '10' },
  { key: '11', value: '11', text: '11' },
  { key: '12', value: '12', text: '12' },
  { key: '13', value: '13', text: '13' },
  { key: '14', value: '14', text: '14' },
  { key: '15', value: '15', text: '15' },
  { key: '16', value: '16', text: '16' },
  { key: '17', value: '17', text: '17' },
  { key: '18', value: '18', text: '18' },
  { key: '19', value: '19', text: '19' },
  { key: '00', value: '00', text: '00' },
  { key: '01', value: '01', text: '01' },
  { key: '02', value: '02', text: '02' },
  { key: '03', value: '03', text: '03' },
  { key: '04', value: '04', text: '04' },
  { key: '05', value: '05', text: '05' },
  { key: '06', value: '06', text: '06' },
  { key: '07', value: '07', text: '07' },
  { key: '08', value: '08', text: '08' },
  { key: '09', value: '09', text: '09' },
  { key: '00', value: '00', text: '00' },
  { key: '31', value: '31', text: '31' }
]

function TextData(props) {
  const { feilds, submit, handleChanges } = useForm()
  // const [pickDate, setPickDate] = useState({});

  // useEffect(() => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=acaE6QqfjcI4Nqk2RdyPiuXYlKpuFaSPObtD6KXp&date=${pickDate}`)
  //     .then(response => {
  //       console.log("response.data:", response.data);
  //       const pickedDate = response.data.date;
  //       setPickDate(pickedDate);
  //     })
  //     .catch(err => {
  //       console.log("There was an error: ", err);
  //     })
  // }, [pickDate])

  return (
    <>
      <Header as="h1">Nasa's APOD</Header>
      <p>(Astronomy Photo of the day)</p>
      <Divider />
      <Label as='a'>
        <Icon name="calendar" />Date: {props.apodData.date}
      </Label>
      <Header as="h2">"{props.apodData.title}"</Header>
      <Container>{props.apodData.explanation}</Container>
    </>
  )
}

export default TextData;
