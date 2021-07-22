import React from 'react';
import { Link } from '@reach/router'

function Row(props) {
  const {mission, rocketName, rocketType, year } = props
  return (
    <Link to="details" style={{textDecoration:'none'}}>
      <div className="row">
        <div className="cell" id="mission-name-cell">{mission}</div>
        <div className="cell" id="rocket-name-cell">{rocketName}</div>
        <div className="cell" id="rocket-type-cell">{rocketType}</div>
        <div className="cell" id="launch-year-cell">{year}</div>
      </div>
    </Link>
  );
}

export default Row;