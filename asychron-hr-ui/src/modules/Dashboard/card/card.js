import React from 'react';
import { Card } from 'react-bootstrap';
import './card.css';  
import leave from '../../../assets/Leave.png'; 
import Payroll from '../../../assets/Payroll.png';
import Holiday from '../../../assets/Holiday2.png';
import Cake from '../../../assets/cake.png';



const Cards = (props) => {
//const dates=new Date();
//const next='Next';
//const leaves={'2':'march','5':'Jun'};
//const events=['Leave','Holiday','Birthday','Payroll'];
//let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//const days=["Sunday","Monday","Tuesday","wednesday","Thusday","Friday","Saturday"];
return(
<div className="main">
<div className="d-flex flex-row-reverse bd-highlight">
  <div className="p-2 bd-highlight"> <Card className="card">
              <Card.Img className="image" variant="top" src={Cake} />
            <Card.Body>
              <Card.Title>Next Birthday</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card></div>
  <div className="p-2 bd-highlight"><Card className="card">
              <Card.Img className="image" variant="top" src={Holiday} />
            <Card.Body>
              <Card.Title>Next Holiday</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card></div>
</div>
<div className="d-flex flex-row-reverse bd-highlight">
  <div className="p-2 bd-highlight"> <Card className="card">
              <Card.Img className="image" variant="top" src={Payroll} />
            <Card.Body>
              <Card.Title>Next Payroll</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card></div>
  <div className="p-2 bd-highlight"><Card className="card">
              <Card.Img className="image" variant="top" src={leave} />
            <Card.Body>
              <Card.Title>Next Leave</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card></div>
</div>
</div>
)
}   
export default Cards;