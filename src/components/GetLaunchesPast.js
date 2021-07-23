import React from 'react';
import Row from './Row'

function GetLaunchesPast(props) {
  const {launches, loading} = props
  if(loading) {
    return null
  }
  const mappedLaunches = launches.map(launch => <Row key={launch.id} missionId={launch.id} missionName={launch.mission_name} rocketName={launch.rocket.rocket_name} rocketType={launch.rocket.rocket_type} year={launch.launch_year} />)
  return (
    <div>
      {mappedLaunches}
    </div>
  );
}

export default GetLaunchesPast;