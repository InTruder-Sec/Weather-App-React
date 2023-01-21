import './App.css';
import Cards from './Cards';
import Location from './CurrentLocation';

function App() {
  return (
    <div className="App">
      <div className='header-div'>
        5-Day Forecast.
      </div>
      <Location />
      <Cards />
    </div>
  );
}

export default App;
