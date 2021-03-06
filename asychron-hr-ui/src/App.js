// import logo from './logo.svg';
import './App.css';
import Dashboard from './modules/Dashboard/News/News';
import Dates from './modules/Dashboard/Dates/Dates';
import Progress from './modules/Dashboard/circularProgress/circularProgress';
import Pro from './modules/Dashboard/Progress/Progress';
function App() {
  return (
    <div>
      <header >
        <Dashboard />
        <Dates />
        <Pro />
        <Progress />
      </header>
      </div>
      
      
  
  );
}

export default App;
