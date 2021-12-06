import "./TeamWeek.css"
import pitch from "./assets/pitch.svg"

const TeamWeek = ()=>{
    return(
        <div className="teamWeek">
            <div className="weekHeader">Team of the Week</div>
            <img src={pitch} style={{width: "80%", margin: "0 auto"}} />
        </div>
    )    
}

export default TeamWeek