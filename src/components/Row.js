import React from 'react';

function Row(props) {
  return (
    <div className="row">
      <div className="cell" id="mission-name-cell">Neptune ice caves</div>
      <div className="cell" id="rocket-name-cell">tail wind</div>
      <div className="cell" id="rocket-type-cell">X-1-255</div>
      <div className="cell" id="launch-year-cell">2010</div>
    </div>
  );
}

export default Row;