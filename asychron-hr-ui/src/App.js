// import logo from './logo.svg';
import './App.css';
import Dashboard from './modules/Dashboard/News/News';
import Dates from './modules/Dashboard/Dates/Dates';
import Progress from './modules/Dashboard/circularProgress/circularProgress';

function App() {
  return (
    <div>
      <header >
        <Dashboard />
        <Dates />
        <Progress />
      </header>
      </div>
      
      
  
  );
}

export default App;
