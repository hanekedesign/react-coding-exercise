import styled from 'styled-components';
import background from './img/background.svg';
import ticketBackground from './img/ticketbackground.svg';
import './App.css';


export const Main = styled.div`
background-image:url(${background});
background-size:cover;
background-repeat:no-repeat;
font-family: "Roboto", sans-serif;
position:absolute;
top: 0; 
left: 0;
width:100%;
height:100%;
box-sizing: border-box;
& * {box-sizing: border-box;}
`

export const Wrapper = styled.div`
position:relative;
left: 25%;
top: 10%;
display:flex;
flex-direction:column;
width: 100%;
max-width: 70%;
`

export const Header = styled.div`
display:flex;
align-items:flex-end;
justify-content: space-between;
width:95%;
margin-bottom:15px;
`

export const Logo = styled.img`
width:35%;
padding-right: 10px;
`

export const RocketIcon = styled.img`
position:absolute;
top:1px;
left: 5px;
`

export const ArrowRight = styled.img`
visibility:${props => (props.rowHover === props.number ? 'visible' : 'hidden')};
`

export const SearchBarWrapper = styled.div`
position:relative;
width:51%;
`

export const SearchBar = styled.input`
border: none;
background: #193247;
padding: 6px 0 6px 30px;
width: calc(100% - 10px);
color: #f4ddb5;
border-radius: 15px;
font-size: 13px;
&:focus {outline: none;}
`

export const Button = styled.img`
height:28px;
cursor: pointer;
`

export const Table = styled.table`
width:100%;
border-spacing: 3px 7px;
margin: 5px 0 10px;
font-size: 14px;
color: #193247;
& tr td:first-child{
    width: 29%;
}& tr td:nth-child(2){
    width: 25%;
}& tr td:nth-child(3){
    width: 15%;
    text-align:center;
}& tr td:nth-child(4){
    width: 13%;
    text-align:center;
}& tr td:nth-child(5){
    width: 2%;
}
`
export const TR = styled.tr`
cursor:pointer;
`

export const TD = styled.td`
background:${props => (props.rowHover === props.number ? '#D14B39' : '#fdf2dd')};
color:${props => (props.rowHover === props.number ? '#fff' : '#193247')};
font-weight:${props => (props.rowHover === props.number ? 'bold' : 'normal')};
padding: 22px;
border-radius: 10px;
`
export const Loading = styled.div`
font-family: "Roboto Bold", sans-serif;
margin: 20px;
font-size: 30px;

`

export const TicketBackground = styled.div`
font-family: "Roboto", sans-serif;
color: #f4ddb5;
background-image:url(${ticketBackground});
background-size:cover;
background-repeat:no-repeat;
display: flex;
align-items:flex-start;
position: absolute;
top: 0;
left:0;
width:100%;
height:100%; 
`

export const MainTicket = styled.img`
width: 100%;
`

export const TicketWrapper = styled.div`
display:flex;
flex-direction:column;
position: relative;
`

export const BackArrow = styled.img`
cursor:pointer;
width: 3%;
padding: 20px;
margin-top: 28px;
`

export const TicketData = styled.div`

`


export const MissionTitle = styled.div`
position: absolute;
top: 29%;
left: 14%;
font-size: 18px;
`

export const MissionName = styled.div`
position: absolute;
top: 33%;
left: 14%;
font-size: 40px;
font-family:"Roboto Light";
`

export const RocketTitle = styled.div`
position: absolute;
top: 46%;
left: 14%;
`
export const RocketName = styled.div`
position: absolute;
top: 50%;
left: 14%;
`
export const RocketTypeTitle = styled.div`
position: absolute;
top: 46%;
left: 34%;
`
export const RocketType = styled.div`
position: absolute;
top: 50%;
left: 34%;
`

export const LaunchYearTitle = styled.div`
position: absolute;
top: 19%;
left: 79%;
color: #193247;
font-size:12px;
`
export const LaunchYear = styled.div`
position: absolute;
top: 23%;
left: 79%;
color: #193247;
font-size:30px;
font-family:"Roboto Light";
`


export const Labels = styled.div`
display:flex;
width: 100%;
align-items:flex-end;
justify-content: left;
font-family: "Roboto Bold", sans-serif;
font-size: 15px;
margin: 10px 0 2px;
cursor:pointer;
color:#193247;
`

export const MissionLabel = styled.div`
position: relative;
width: 34%;
border-bottom:1px solid #193247;
padding: 0px 0 5px 5px;
`
export const SortArrow = styled.img`
transform:${props => (!props.flipped ? 'rotate(180deg) translateY(-3px)' : ' translateY(3px)')};
margin-left: 10px;
margin-bottom:2px;
cursor:pointer;
display:${props => props.picked ? '' : 'none'};
`
export const RocketLabel = styled.div`
position: relative;
width: 29%;
padding: 0px 0 5px 5px;
border-bottom:1px solid #193247;

`
export const TypeLabel = styled.div`
position: relative;
width: 17.5%;
padding: 0px 0 5px 5px;
border-bottom:1px solid #193247;

`

export const YearLabel = styled.div`
position: relative;
width: 15%;
padding: 0px 0 5px 5px;
border-bottom:1px solid #193247;
.last-underline{
width:102%;
}
`
export const SpacerLabel = styled.div`
width: 2%;
min-width: 40px;
`
export const Pagination = styled.span`
font-family: "Roboto Bold", sans-serif;
font-size: 14px;
margin-right: 20px;
`
export const PrintWrap = styled.div`
text-align: right;
padding-right: 5%;
margin-top: -3%;
`

export const Count = styled.span`
color:#193247;
font-weight:bold;
margin-right:20px;
`
export const PageCount = styled.div`
display:flex;
align-items:center;
`

export const UnderlineBar = styled.div`
position: absolute;
display:${props => props.picked ? '' : 'none'} ;
width: 100%;
height: 6px;
border-radius:10px;
background: #193247 ;
margin-top: 3px;
margin-left: -7px;
`



