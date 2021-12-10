import React from "react"
import "./TeamLogo.css"

const TeamLogo = (props) => {
	if(props.teamLogo){
		return(
			<div>
				<img src={props.teamLogo} alt="team logo" className="teamImage"/>
			</div>
		)
	}
	else{
		return(
			<div></div>
		)
	}
}

export default TeamLogo