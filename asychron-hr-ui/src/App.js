// import logo from './logo.svg';
import './App.css';
import Dashboard from './modules/Dashboard/News/News';
import Cards from './modules/Dashboard/card/card';
import Progress from './modules/Dashboard/circularProgress/circularProgress';

 
//import ApexChart from './modules/Dashboard/circularProgress/circularProgress';

function App() {
  return (
    <div>
      
          <Dashboard />
          <Cards />
         <Progress />
</div>
      
      
  
  );
}

export default App;
