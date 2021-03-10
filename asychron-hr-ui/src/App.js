// import logo from './logo.svg';
import './App.css';
import Dashboard from './modules/Dashboard/News/News';
import Dates from './modules/Dashboard/Dates/Dates';
import Progress from './modules/Dashboard/circularProgress/circularProgress';
import Pro from './modules/Dashboard/Progress/Progress';
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col ><Dashboard /></Col>
          <Col> <Dates /></Col>
        </Row>
      </Container>
</div>
      
      
  
  );
}

export default App;
