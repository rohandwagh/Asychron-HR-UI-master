// {/* <div className="container">
// <div className="card">
// <ProgressBar>
//     <ProgressBar striped variant="success" now={35} key={1} />
//     <ProgressBar variant="warning" now={20} key={2} />
//     <ProgressBar striped variant="danger" now={10} key={3} />
// </ProgressBar>
// <br />
// <ProgressBar>
//     <ProgressBar striped variant="success" now={0} key={1} />
//     <ProgressBar variant="warning" now={2} key={2} />
//     <ProgressBar striped variant="danger" now={10} key={3} />
// </ProgressBar>
// <ProgressBar>
//     <ProgressBar striped variant="success" now={35} key={1} />
//     <ProgressBar variant="warning" now={20} key={2} />
//     <ProgressBar striped variant="danger" now={10} key={3} />
// </ProgressBar>
// <ProgressBar>
//     <ProgressBar striped variant="success" now={35} key={1} />
//     <ProgressBar variant="warning" now={20} key={2} />
//     <ProgressBar striped variant="danger" now={10} key={3} />
// </ProgressBar>
// </div>
// </div> */}
import ProgressBar from 'react-customizable-progressbar'
const percentage=66;
const pro = () => {
    return(
<div className="container">
    <div className="row" style={{margin:'0px',padding:'0px',WebkitBorderRadius:'20px', marginTop:'0px'}}>
                <ProgressBar
                    progress={60}
                    radius={80}
                    value={percentage} 
                    text={`${percentage}%`}
                    strokeColor={'Blue'}
                    
                />
                <h1>Leaves</h1>
                <ProgressBar
                    progress={60}
                    radius={80}
                    title={'Performance'}
                    strokeColor={'Blue'}
                    Margin={'20px'}
                />
                <h1>Peformance</h1>
    </div>
    <div className="row" style={{margin:'0px',padding:'0px'}}>
                <ProgressBar
                    progress={60}
                    radius={80}
                    text={'Leaves'}
                    strokeColor={'Blue'}
                    Margin={'20px'}
                />
                <h1>Status</h1>
                <ProgressBar
                    progress={60}
                    radius={80}
                    text={'Status'}
                    strokeColor={'Blue'}
                    Margin={'20px'}
                />
                <h1>Task</h1>
                </div>
                
</div>
)
}
export default pro;