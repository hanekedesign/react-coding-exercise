import { Main, Header, Logo, SearchBar, Button, RocketIcon, SearchBarWrapper, Table, TR, TD, Wrapper, Loading, ArrowRight, Labels, SortArrow, MissionLabel, RocketLabel, TypeLabel, YearLabel, Count } from './styles'
import { useState, useEffect } from 'react';
import Ticket from './Ticket';
import logo from './img/logo.svg';
import rocket from './img/rocket.svg';
import arrowDown from './img/arrow-down.svg'
import rightArrow from './img/arrow-right.svg'
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MISSIONS = gql`
query($filter: String, $age:String){
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
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(6);
  const [searchFlights, setSearchFlights] = useState('');
  const [searchClick, setSearchCLick] = useState('');
  const [rowHover, setRowHover] = useState();
  const [isTicket, setTicket] = useState(false);
  const [ticketData, setTicketData] = useState();
  const [isDescending, setDescending] = useState(true);

  useEffect(() => {
    executeSearch({ variables: { filter: searchClick, age: isDescending ? "desc" : "asc" } });
    setMissions(data?.launchesPast);
  }, [data, executeSearch, isDescending, searchClick]);


  const handleSearch = () => {
    setPageStart(0);
    setPageEnd(6);
    setSearchCLick(searchFlights)
    executeSearch({ variables: { filter: searchClick } });
    setMissions(data?.launchesPast);
  };


  return (
    <div>
      {!isTicket ?
        <Main>
          <Wrapper>
            <Header>
              <Logo src={logo} />
              <SearchBarWrapper>
                <RocketIcon src={rocket} />
                <SearchBar
                  placeholder={'Search for flights'}
                  onInput={(e) => setSearchFlights(e.target.value)}
                  value={searchFlights}
                  onKeyPress={(e) => { if (e.key === 'Enter') handleSearch() }} />
              </SearchBarWrapper>
              <Button onClick={handleSearch}>SEARCH</Button>
            </Header>

            <Labels onClick={() => setDescending(!isDescending)}>
              <MissionLabel>
                MISSION NAME
                <SortArrow src={arrowDown} flipped={isDescending} />
              </MissionLabel>
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
              <Count>{pageEnd / 6}&nbsp;of&nbsp;{missions ? Math.ceil(missions.length / 6) : 0}</Count>
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
