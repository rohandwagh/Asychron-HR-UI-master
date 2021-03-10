import React from 'react';
import { Card, Media } from 'react-bootstrap';
import './card.css';  
import leave from '../../../../assets/download.jpeg'; 
import birthday from '../../../../assets/birthday.jpg';
import Holiday from '../../../../assets/Holiday.jpg';
import payroll from '../../../../assets/payroll.jpg';

const Cards = (props) => {
const dates=new Date();
//const next='Next';
//const leaves={'2':'march','5':'Jun'};
//const events=['Leave','Holiday','Birthday','Payroll'];
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//const days=["Sunday","Monday","Tuesday","wednesday","Thusday","Friday","Saturday"];


return(
    <div style={{marginLeft:'700px',marginTop:'-110px'}}>
    <div className='Date' >
    <Card style={{ borderColor:'black',margin:'30px',width: '18rem'}}>
        <Card.Body>
        <Card.Img src={leave} style={{padding:'10px',zIndex:'1',objectFit:'cover'}}></Card.Img>
            <Card.Title>Next Leave</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
      next leave on {dates.getUTCDay()}th - {months[dates.getUTCMonth()]}
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div>
<Card style={{borderColor:'black', margin:'30px',width: '18rem' }}>
  <Card.Body>
  <Card.Img src={Holiday} style={{padding:'10px',zIndex:'1',objectFit:'cover'}}></Card.Img>
    <Card.Title>Next Holiday</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    next Holiday on {dates.getUTCDay()}th - {months[dates.getUTCMonth()]}
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div>
<Card style={{borderColor:'black', marginLeft:'350px',marginTop:'-615px',top:'0px',width: '18rem' }}>
  <Card.Body>
  <Card.Img src={birthday} style={{padding:'10px',zIndex:'1',objectFit:'cover'}}></Card.Img>
    <Card.Title>Next Birthday</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    next Birthday on {dates.getUTCDay()}th - {months[dates.getUTCMonth()]}
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div>
<Card style={{borderColor:'black',marginLeft:'350px', marginTop:'30px',width: '18rem' }}>
  <Card.Body>
  <Card.Img src={payroll} style={{padding:'10px',zIndex:'1',objectFit:'cover'}}></Card.Img>
    <Card.Title>Next Payroll</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    next Payroll on {dates.getUTCDay()}th - {months[dates.getUTCMonth()]}
    </Card.Text>
  </Card.Body>
</Card>
</div>
</div>
)
}   
export default Cards;