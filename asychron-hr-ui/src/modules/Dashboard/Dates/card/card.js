import React from 'react';
import { Card, Media, Row , Container ,Col } from 'react-bootstrap';
import './card.css';  
import leave from '../../../../assets/leave.png'; 
import birthday from '../../../../assets/birthday.jpg';
import Payroll from '../../../../assets/Payroll.png';
import Holiday from '../../../../assets/holiday.png';
import Cake from '/home/rohan/Asychron-HR-UI-master/asychron-hr-ui/src/assets/cake.png';
const Cards = (props) => {
//const dates=new Date();
//const next='Next';
//const leaves={'2':'march','5':'Jun'};
//const events=['Leave','Holiday','Birthday','Payroll'];
//let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//const days=["Sunday","Monday","Tuesday","wednesday","Thusday","Friday","Saturday"];
return(
  <div className="containt">
  
  
    <Card className="card">
              <Card.Img className="image" variant="top" src={Cake} />
            <Card.Body>
              <Card.Title>Next Birthday</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card>
    <Card className="card">
              <Card.Img className="image" variant="top" src={Holiday} />
            <Card.Body>
              <Card.Title>Next Holiday</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card>
        




        
  
    <Card className="card">
              <Card.Img className="image" variant="top" src={Payroll} />
            <Card.Body>
              <Card.Title>Next Payroll</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card>
    <Card className="card">
              <Card.Img className="image" variant="top" src={leave} />
            <Card.Body>
              <Card.Title>Next Leave</Card.Title>
              <Card.Text>
                Some quick example text 
              </Card.Text>
            </Card.Body>
        </Card>S
  


        </div>
)
}   
export default Cards;