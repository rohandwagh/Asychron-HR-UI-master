import React from 'react';
//import { Col, Row,SplitButton,ButtonGroup,ProgressBar} from 'react-bootstrap';
import { DropdownButton,Dropdown} from 'react-bootstrap';
//import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import './News.css';

const Dashboard = () => {
    return(
        <h1 className="container">
        <DropdownButton id="dropdown-item-button" title="Official News">
            <Dropdown.ItemText >News </Dropdown.ItemText>
            <Dropdown.ItemText>We have new work space in pune</Dropdown.ItemText>
            <Dropdown.ItemText>Something else</Dropdown.ItemText>
        </DropdownButton>
        </h1>
        
        
    )
}
export default Dashboard;