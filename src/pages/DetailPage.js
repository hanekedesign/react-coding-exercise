import React from 'react';
import { Link } from '@reach/router'
import '../DetailPage.css';
import backBtn from '../images/back.svg'

function DetailPage(props) {
  return (
    <div className="detail-page">
      <Link to="/"><img className="backbtn" src={backBtn}/></Link>
      <div className="ticket-area">
      <div className="ticket">
        <div className="ticket-mission-content">
          <p className="ticket-subtitle">MISSION NAME</p>
          <p id="mission-ticket-name">To The Moon And Back</p>
          <div className="rocket-info-container">
            <div className="rocket-info">
              <p className="ticket-subtitle">ROCKET NAME</p>
              <p className="rocket-data-text">Ricochet</p>
            </div>
            <div className="rocket-info">
              <p className="ticket-subtitle">ROCKET TYPE</p>
              <p className="rocket-data-text">Corallina Freighter</p>
            </div>
          </div>
        </div>
        <div className="ticket-launch-year-content">
          <h6 id="launch-year-ticket-title" >LAUNCH YEAR</h6>
          <p id="ticket-launch-year">2007</p>
        </div>
      </div>
      <button id="print-btn">PRINT TICKET</button>
      </div>
    </div>
  );
}

export default DetailPage;