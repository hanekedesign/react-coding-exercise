import React, {useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import Row from './Row'

const GET_LAUNCHES = gql`
  query {
    launchesPast(limit: 6) {
      id
      mission_name
      launch_year
      rocket {
        rocket_name
        rocket_type
      }
    }
  }`

function GetLaunchesPast(props) {
  const {data} = useQuery(GET_LAUNCHES)
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    data && setLaunches(prevState => data.launchesPast)
  }, [data])
  const mappedLaunches = launches.map(launch => <Row key={launch.id} mission={launch.mission_name} rocketName={launch.rocket.rocket_name} rocketType={launch.rocket.rocket_type} year={launch.launch_year} />)
  return (
    <div>
      {console.log(launches)}
      {mappedLaunches}
    </div>
  );
}

export default GetLaunchesPast;