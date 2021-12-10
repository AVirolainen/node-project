import "./TeamWeek.css"
import {useState, useEffect, useCallback} from "react"
import {useHttp} from "../../hooks/http.hook"

const TeamWeek = ()=>{
    const [teamOfTheWeek, setTeamOfTheWeek] = useState()
    const {request} = useHttp()

    const getTeamWeek = useCallback(async () => {
        try {
            const data = await request('/api/teamWeek/')
            console.log(data)
            setTeamOfTheWeek(data)
        } catch (e) {}
    }, [request])

    useEffect(()=>{
        getTeamWeek()
    }, [getTeamWeek])
    if(!teamOfTheWeek){
        return(
            <div> </div>
        )
    }
    return(
        <div className="teamWeek">
            <div className="weekHeader">Team of the Week</div>
            <div className="weekPitch">
                <div className="weekWrapper">
                    {
                    teamOfTheWeek.slice(0, 2).map((item)=>{
                        return <div>
                            <img className="weekLogo" src={item.logo} alt={item.logo}/>
                            <div style={{fontSize: "10px", marginTop: "5px"}}>{item.teamName}</div>
                            <div style={{fontWeight: "900", fontSize: "18px",}}>{item.name}</div>
                            <div className="weekRate">{item.rate}</div>
                        </div>
                    })
                    }
                </div>
                <div className="weekWrapper" style={{width: "700px"}}>
                    {
                    teamOfTheWeek.slice(2, 6).map((item)=>{
                        return <div>
                            <img className="weekLogo" src={item.logo} alt={item.logo}/>
                            <div style={{fontSize: "10px", marginTop: "5px"}}>{item.teamName}</div>
                            <div style={{fontWeight: "900", fontSize: "18px",}}>{item.name}</div>
                            <div className="weekRate">{item.rate}</div>
                        </div>
                    })
                    }
                </div>
                <div className="weekWrapper" style={{width: "700px"}}>
                    {
                    teamOfTheWeek.slice(6, 10).map((item)=>{
                        return <div>
                            <img className="weekLogo" src={item.logo} alt={item.logo}/>
                            <div style={{fontSize: "10px", marginTop: "5px"}}>{item.teamName}</div>
                            <div style={{fontWeight: "900", fontSize: "18px",}}>{item.name}</div>
                            <div className="weekRate">{item.rate}</div>
                        </div>
                    })
                    }
                </div>
                <div className="weekWrapper" style={{width: "700px"}}>
                    <div>
                        <img className="weekLogo" src={teamOfTheWeek[10].logo} alt={teamOfTheWeek[10].logo}/>
                        <div style={{fontSize: "10px", marginTop: "5px"}}>{teamOfTheWeek[10].teamName}</div>
                        <div style={{fontWeight: "900", fontSize: "18px",}}>{teamOfTheWeek[10].name}</div>
                        <div className="weekRate">{teamOfTheWeek[10].rate}</div>
                    </div>
                </div>
            </div>
        </div>
    )    
}
 
export default TeamWeek