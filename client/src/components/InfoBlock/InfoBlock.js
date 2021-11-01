import "./InfoBlock.css"
import {useState, useEffect, useContext} from "react"
import {useHttp} from "../../hooks/http.hook"
import teamsInfo from "./data/teamsInfo"
import PlayerCascader from "./PlayerCascader/PlayerCascader"
import Loader from "../Loader/Loader"

function capitalizeFirstLetter(string) {
    if(string.indexOf("-")){
        return string.split("-").map(a=>a.charAt(0).toUpperCase() + a.slice(1)).join("-")
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const InfoBlock = ()=>{
    const {loading, error, request, clearError} = useHttp()
    const [playersList, setPlayersList] = useState([])

    console.log(playersList)


    useEffect(()=>{
        const getPlayers = async (name, id, logo) =>{
            try{  
                const data = await request('/api/players/', 'POST', {name: name, id: id, logo: logo})
                setPlayersList(playersList => [...playersList, data])
            } catch(e){}
        }
        teamsInfo.forEach((item)=>{
            getPlayers(item.teamName, item.teamId, item.teamLogoId)
        })
    }, [])

    const playersByPositions =(position)=>{
        return playersList.map((item)=>{
            return {
                value: item.team,
                label: capitalizeFirstLetter(item.team),
                children: item[position].map((innerItem)=>{
                    return {
                        value: innerItem,
                        label: innerItem,
                    }
                })
            }
        })
    }

    if(playersList.length != 20){
        return(
            <div className="infoBlock">
                <Loader />
            </div>  
            
        )
    }
    return(
        <div className="infoBlock">
            <div className="footballField">
                <div className="positionsWrapper">
                        <div className="fieldPostion"></div>
                        <div className="fieldPostion"></div>
                </div>
                <div className="positionsWrapper">
                        <div className="fieldPostion"></div>
                        <div className="fieldPostion"></div>
                        <div className="fieldPostion"></div>
                        <div className="fieldPostion"></div>
                </div>
                <div className="positionsWrapper">
                        <div className="fieldPostion"></div>
                        <div className="fieldPostion"></div>
                        <div className="fieldPostion"></div>
                        <div className="fieldPostion"></div>
                </div>
                <div className="positionsWrapper">
                        <div className="fieldPostion"></div>
                </div>
            </div>

            <div className="teamPlayers">
                <div className="teamPlayersHeader">
                    Ваш состав
                </div>
                <div className="playersPosition">
                    Нападающие
                </div>

                    <PlayerCascader options={playersByPositions("forward")}/>
                    <PlayerCascader options={playersByPositions("forward")}/>
                <div className="playersPosition">
                    Полузащитники
                </div>
                    <PlayerCascader options={playersByPositions("midfielder")}/>
                    <PlayerCascader options={playersByPositions("midfielder")}/>
                    <PlayerCascader options={playersByPositions("midfielder")}/>
                    <PlayerCascader options={playersByPositions("midfielder")}/>
                <div className="playersPosition">
                    Защитники
                </div>
                    <PlayerCascader options={playersByPositions("defender")}/>
                    <PlayerCascader options={playersByPositions("defender")}/>
                    <PlayerCascader options={playersByPositions("defender")}/>
                    <PlayerCascader options={playersByPositions("defender")}/>
                <div className="playersPosition">
                    Вратарь
                </div>
                    <PlayerCascader options={playersByPositions("goalkeeper")}/>

 
            </div>
        </div>
    )
}

export default InfoBlock