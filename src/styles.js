import styled from 'styled-components';
import background from './img/background.svg';
import ticketBackground from './img/ticketbackground.svg'
import robotoRegular from './fonts/Roboto/Roboto-Regular.ttf'


export const Main = styled.div`
background-image:url(${background});
background-size:cover;
background-repeat:no-repeat;
position:absolute;
width:100%;
height:100%;
`

export const Wrapper = styled.div`
position:relative;
left: 25%;
top: 10%;
display:flex;
flex-direction:column;
width:fit-content;
`

export const Header = styled.div`
display:flex;
flex-direction:row;
align-items:flex-end;
width:fit-content;
`

export const Logo = styled.img`
width:35%;
`;
export const RocketIcon = styled.img`
/* position:absolute;
margin-top:5px;
margin-left: 3px; */
`

export const ArrowRight = styled.img`

display:${props => (props.rowHover === props.number ? '' : 'none')};;
`

export const SearchBarWrapper = styled.div`
position:relative;
width:40%;
`

export const SearchBar = styled.input`
position: relative;
border:none;
width:100%;
height:100%;
background:#193247;
padding-left:30px;
color:#f4ddb5;
border-radius: 44px;
&:focus {
        outline: none;
    }
`
export const Button = styled.button`
height:33px;
background:#D14B39;
color:white;
border:none;
border-radius: 44px;
cursor:pointer;
padding:0px 30px 0px 30px;
width:auto;
max-width:150px;
`

export const Table = styled.table`
border:1px solid red;
width:800px;
`
export const TR = styled.tr`
border:1px solid red;
cursor:pointer;
`

export const TD = styled.td`
background:${props => (props.rowHover === props.number ? '#D14B39' : '#fdf2dd')};
border:1px solid red;
`
export const Loading = styled.div``

export const TicketBackground = styled.div`
background-image:url(${ticketBackground});
background-size:cover;
background-repeat:no-repeat;
position:absolute;
width:99%;
height:99%; 
`

export const MainTicket = styled.img``

export const TicketWrapper = styled.div`
display:flex;
flex-direction:column;

`

export const BackArrow = styled.img`
cursor:pointer;
`

export const TicketData = styled.div``

export const MissionName = styled.div``
export const MissionTitle = styled.div``

export const RocketName = styled.div``
export const RocketTitle = styled.div``

export const RocketType = styled.div``
export const RocketTypeTitle = styled.div``

export const LaunchYear = styled.div``
export const LaunchYearTitle = styled.div``

export const Labels = styled.div`
display:flex;
flex-direction:row;
`

export const MissionLabel = styled.div``
export const SortArrow = styled.img`
transform:${props => (!props.flipped ? 'rotate(180deg)' : '')};
`
export const RocketLabel = styled.div``
export const TypeLabel = styled.div``
export const YearLabel = styled.div``



