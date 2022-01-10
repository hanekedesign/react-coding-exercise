import { TicketBackground, MainTicket, TicketWrapper, BackArrow, Button, TicketData, MissionName, RocketName, RocketType, LaunchYear, MissionTitle, RocketTitle, RocketTypeTitle, LaunchYearTitle, PrintWrap } from "./styles";
import mainTicket from './img/mainticket.svg';
import backArrow from './img/arrow-back.svg';
import printTicket from './img/print-ticket.png'



function Ticket(props) {
    console.log(props)
    return (
        <TicketBackground>
            <BackArrow src={backArrow} onClick={() => props.goback(false)} />
            <TicketWrapper>
                <TicketData>
                    <MissionTitle>MISSION NAME</MissionTitle>
                    <MissionName>{props.ticketdata.mission_name}</MissionName>
                    <RocketTitle>ROCKET NAME</RocketTitle>
                    <RocketName>{props.ticketdata.rocket.rocket_name}</RocketName>
                    <RocketTypeTitle>ROCKET TYPE</RocketTypeTitle>
                    <RocketType>{props.ticketdata.rocket.rocket_type}</RocketType>
                    <LaunchYearTitle>LAUNCH YEAR</LaunchYearTitle>
                    <LaunchYear>{props.ticketdata.launch_year}</LaunchYear>
                    <MainTicket src={mainTicket} />
                </TicketData>
                <PrintWrap>
                    <Button src={printTicket} />
                </PrintWrap>

            </TicketWrapper>
        </TicketBackground>
    )
}
export default Ticket

