import Row from './components/Row'
import './App.css';
import spacetours from './images/spacetours.svg'
import rocketship from './images/rocketship.svg'

function App() {
  return (
    <div className="App">
      <div className="page-content">
        <div className="header">
          <div className="title-container">
            <img className="title" src={spacetours} />
          </div>
          <form>
            <div className="input-container">
              <input 
                type="text"
                name="search" 
                placeholder="Search for flights"
              />
              <img src={rocketship} />
            </div>
            <button className="search-btn">SEARCH</button>
          </form>
        </div>
        <div className="columns">
          <h5 className="column-title" id="mission-name">MISSION NAME</h5>
          <h5 className="column-title" id="rocket-name" >ROCKET NAME</h5>
          <h5 className="column-title" id="rocket-type" >ROCKET TYPE</h5>
          <h5 className="column-title" id="launch-year">LAUNCH YEAR</h5>
        </div>
        <Row />
        <Row />
        <Row />
        <Row />
        <span className="page">6 of 45</span>
        <button className="pagination-btn">LOAD MORE</button>
      </div>
    </div>
  );
}

export default App;
