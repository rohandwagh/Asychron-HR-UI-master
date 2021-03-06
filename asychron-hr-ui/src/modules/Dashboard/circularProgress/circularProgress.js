import React from 'react';
import './circularProgress.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";


// Animation


function Example(props) {
    return (
      <div style={{ marginBottom: 80 }}>
        <hr style={{ border: "2px solid #ddd" }} />
        <div style={{ marginTop: 30, display: "flex" }}>
          <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
          <div style={{ width: "50%" }}>
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }

const percentage = 96;
const circularprogress = () => {
return(
      <div className="container" style={{ padding: "40px 40px 40px 40px" }}>
        <h1>react-circular-progressbar examples</h1>
        <h2>Common style customizations</h2>
        <Example label="Default">
          <CircularProgressbar value={percentage} text={'Task'} strokeWidth={3}/>
        </Example>
        <Example label="Stroke width">
          <CircularProgressbar
            value={percentage}
            text={'Leaves'}
            strokeWidth={3}
            width={'140px'}
            height={'140px'}
          />
        </Example>
        <Example label="Default">
          <CircularProgressbar value={percentage} text={'Performance'} strokeWidth={3}/>
        </Example>
        <Example label="Default">
          <CircularProgressbar value={percentage} text={'Status'} strokeWidth={3}/>
        </Example>
        </div>

)
}
export default circularprogress;