import React, {useState} from 'react';
import { Link } from '@reach/router';
import forward from '../images/forward.svg'

function Row(props) {
  const {missionName, rocketName, rocketType, year } = props
  const [isHovering, setIsHovering] = useState(false)
  return (
    <Link to={`details/${missionName}`} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} style={{textDecoration:'none'}}>
      <div className="row">
        <div className="row-cells">
          <div className="cell" id="mission-name-cell">{missionName}</div>
          <div className="cell" id="rocket-name-cell">{rocketName}</div>
          <div className="cell" id="rocket-type-cell">{rocketType}</div>
          <div className="cell" id="launch-year-cell">{year}</div>
        </div>
      { isHovering && <img src={forward} className="forward-btn" /> }
      </div>
    </Link>
  );
}

export default Row;