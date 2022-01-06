import { Main, Header, Logo, SearchBar, Button, RocketIcon, SearchBarWrapper, Table, TR, TD, Wrapper, Loading, ArrowRight, Labels, SortArrow, MissionLabel, RocketLabel, TypeLabel, YearLabel } from './styles'
import { useState, useEffect, useCallback } from 'react';
import Ticket from './Ticket';
import logo from './img/logo.svg';
import rocket from './img/rocket.svg';
import arrowDown from './img/arrow-down.svg'
import rightArrow from './img/arrow-right.svg'
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MISSIONS = gql`
query($filter: String!, $age:String!){
  launchesPast(find: {mission_name: $filter},sort: "launch_year", order: $age){
    mission_name
    rocket {
      rocket_name
      rocket_type
    }
    launch_year
  }
}
`
function App() {
  const [executeSearch, { loading, data }] = useLazyQuery(GET_MISSIONS);
  const [missions, setMissions] = useState();
  const [originalMissions, setOriginalMissions] = useState();
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(6);
  const [searchFlights, setSearchFlights] = useState('');
  const [rowHover, setRowHover] = useState();
  const [isTicket, setTicket] = useState(false);
  const [ticketData, setTicketData] = useState();
  const [isDescending, setDescending] = useState(true);
  const [isSearched, setSearched] = useState(false);

  useEffect(() => {
    executeSearch({ variables: { filter: searchFlights, age: "desc" } });
    setMissions(data?.launchesPast);
    setOriginalMissions(data?.launchesPast);

  }, [data]);

  const handleInput = useCallback((e) => {
    setSearchFlights(e.target.value);
  }, [searchFlights]);


  const handleSearch = useCallback(() => {
    setPageStart(0);
    setPageEnd(6);
    executeSearch({ variables: { filter: searchFlights } });
    setMissions(data?.launchesPast);
    setSearched(true);
  }, [searchFlights]);

  const handleOrder = useCallback(() => {

    if (isDescending) {
      executeSearch({ variables: { filter: isSearched ? searchFlights : '', age: "asc" } })
    } else {
      executeSearch({ variables: { filter: isSearched ? searchFlights : '', age: "desc" } })
    };

    setDescending(!isDescending);
    console.log(isDescending)

  }, [isDescending])


  return (
    <div>
      {!isTicket ?
        <Main>
          <Wrapper>
            <Header>
              <Logo src={logo} />
              <SearchBarWrapper>
                <RocketIcon src={rocket} />
                <SearchBar placeholder='Search for flights' onInput={(e) => handleInput(e)} />
              </SearchBarWrapper>
              <Button onClick={handleSearch}>SEARCH</Button>
            </Header>

            <Labels>
              <MissionLabel>MISSION NAME</MissionLabel>
              <SortArrow src={arrowDown} flipped={isDescending} onClick={handleOrder} />
              <RocketLabel>ROCKET NAME</RocketLabel>
              <TypeLabel>ROCKET TYPE</TypeLabel>
              <YearLabel>LAUNCH YEAR</YearLabel>

            </Labels>

            {!loading && missions ?
              <Table>
                {missions.slice(pageStart, pageEnd).map((info, i) =>
                  <TR onMouseOver={() => setRowHover(i)} onMouseLeave={() => setRowHover(-1)} onClick={() => { setTicket(true); setTicketData(info); setRowHover(false) }}>
                    <TD rowHover={rowHover} number={i}>
                      {info.mission_name}
                    </TD>
                    <TD rowHover={rowHover} number={i} >
                      {info.rocket.rocket_name}
                    </TD>
                    <TD rowHover={rowHover} number={i} >
                      {info.rocket.rocket_type}
                    </TD>
                    <TD rowHover={rowHover} number={i} >
                      {info.launch_year}
                    </TD>
                    <td>
                      <ArrowRight number={i} src={rightArrow} rowHover={rowHover} />
                    </td>
                  </TR>
                )}
              </Table>
              : <Loading>Loading...</Loading>
            }
            <div>
              <span>{pageEnd / 6}of{missions ? Math.ceil(missions.length / 6) : 0}</span>
              <Button onClick={() => { setPageStart(pageStart + 6); setPageEnd(pageEnd + 6) }} disabled={pageEnd < missions?.length ? false : true}>LOAD MORE</Button>
            </div>

          </Wrapper>
        </Main>
        :
        <Ticket ticketdata={ticketData} goback={setTicket} />
      }
    </div>

  );
}

export default App;
