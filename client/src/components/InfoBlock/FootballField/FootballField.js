import "./FootballField.css"
import TeamLogo from "../TeamLogo/TeamLogo.js"

const FootballField = (props)=>{
	return(

			<div className="footballField">
                <div className="positionsWrapper">
                    {
                        Object.values(props.fieldPlayers).slice(0, 2).map((item, index) => {
                            return (
                                <div className="fieldPostion" key={index}>
                                    <TeamLogo teamLogo={item ? item.logo : null} />
                                    <div className="playerName">
                                    	{item ? item.player : null}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="positionsWrapper">
                    {
                        Object.values(props.fieldPlayers).slice(2, 6).map((item, index) => {
                            return (
                                <div className="fieldPostion" key={index}>
                                    <TeamLogo teamLogo={item ? item.logo : null} />
                                     <div className="playerName">
                                    	{item ? item.player : null}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="positionsWrapper">
                    {
                        Object.values(props.fieldPlayers).slice(6, 10).map((item, index) => {
                            return (
                                <div className="fieldPostion" key={index}>
                                    <TeamLogo teamLogo={item ? item.logo : null} />
                                    <div className="playerName">
                                    	{item ? item.player : null}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="positionsWrapper">
                    {
                        Object.values(props.fieldPlayers).slice(10, 11).map((item, index) => {
                            return (
                                <div className="fieldPostion" key={index}>
                                    <TeamLogo teamLogo={item ? item.logo : null} />
                                    <div className="playerName">
                                    	{item ? item.player : null}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>		
	)
}

export default FootballField