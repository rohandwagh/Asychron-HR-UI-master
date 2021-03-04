import React from 'react';
import './circularProgress.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const progress = () => {
return(
    <div class="container">
        <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
        <br />
        <ProgressBar>
            <ProgressBar striped variant="success" now={0} key={1} />
            <ProgressBar variant="warning" now={2} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
        <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
        <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
    </div>
)
}
export default progress;