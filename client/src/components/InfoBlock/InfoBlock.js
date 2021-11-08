import "./InfoBlock.css"
import {useState, useEffect, useContext} from "react"
import {useHttp} from "../../hooks/http.hook"
import teamsInfo from "./data/teamsInfo"
import PlayerCascader from "./PlayerCascader/PlayerCascader"
import Loader from "../Loader/Loader"
import { Avatar } from 'antd';
import { Button } from 'antd';

function capitalizeFirstLetter(string) {
    if(string.indexOf("-")){
        return string.split("-").map(a=>a.charAt(0).toUpperCase() + a.slice(1)).join("-")
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const InfoBlock = ()=>{

    const {loading, error, request, clearError} = useHttp()
    const [playersList, setPlayersList] = useState([])
    const [fieldPlayers, setFieldPlayers] = useState({})
    
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

    const addToField = (id, logo, player, position, team)=>{
        let test = fieldPlayers
        test[id] = {logo, player, position, team}
        setFieldPlayers(test)
    }

    const playersByPositions =(position)=>{
        return playersList.map((item)=>{
            return {
                logo: item.logo,
                value: item.team,
                label: capitalizeFirstLetter(item.team),
                children: item[position].map((innerItem)=>{
                    return {
                        value: innerItem.split(" ").reverse().join(" "),
                        label: innerItem.split(" ").reverse().join(" "),
                    }
                })
            }
        })
    }

    const saveTeam = ()=>{
        console.log(fieldPlayers)
        const getPlayers = async () =>{
            try{  
                const data = await request('/api/team/saveTeam', 'POST', {id: localStorage.getItem('userData'), playersList: fieldPlayers})
                console.log(data)
            } catch(e){}
        }

        getPlayers()

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
                        <div className="fieldPostion" style={{backgroundImage: fieldPlayers == null  ? null : "url(" + fieldPlayers["0"] + ")"}}>
                            {/* <Avatar key={Date.now()} src={fieldPlayers == null  ? null : fieldPlayers[0]} /> */}
                        </div>
                        <div className="fieldPostion">
                           
                        </div>
                </div>
                <div className="positionsWrapper">
                        <div className="fieldPostion">
                           
                        </div>
                        <div className="fieldPostion">
                            
                        </div>
                        <div className="fieldPostion">
                            <img src={null} />
                        </div>
                        <div className="fieldPostion">
                            <img src={null} />
                        </div>
                </div>
                <div className="positionsWrapper">
                        <div className="fieldPostion">
                            <img src={null} />
                        </div>
                        <div className="fieldPostion">
                            <img src={null} />
                        </div>
                        <div className="fieldPostion">
                            <img src={null} />
                        </div>
                        <div className="fieldPostion">
                            <img src={null} />
                        </div>
                </div>
                <div className="positionsWrapper">
                        <div className="fieldPostion">
                            <img src={null} />
                        </div>
                </div>
            </div>

            <div className="teamPlayers">
                <div className="teamPlayersHeader">
                    Ваш состав
                </div>
                <div className="playersPosition">
                    Нападающие
                </div>
                    <PlayerCascader options={playersByPositions("forward")} id={0} addPlayer={addToField} position={"forward"}/>
                    <PlayerCascader options={playersByPositions("forward")} id={1} addPlayer={addToField} position={"forward"}/>
                <div className="playersPosition">
                    Полузащитники
                </div>
                    <PlayerCascader options={playersByPositions("midfielder")} id={2} addPlayer={addToField} position={"midfielder"}/>
                    <PlayerCascader options={playersByPositions("midfielder")} id={3} addPlayer={addToField} position={"midfielder"}/>
                    <PlayerCascader options={playersByPositions("midfielder")} id={4} addPlayer={addToField} position={"midfielder"}/>
                    <PlayerCascader options={playersByPositions("midfielder")} id={5} addPlayer={addToField} position={"midfielder"}/>
                <div className="playersPosition">
                    Защитники
                </div>
                    <PlayerCascader options={playersByPositions("defender")} id={6} addPlayer={addToField} position={"defender"}/>
                    <PlayerCascader options={playersByPositions("defender")} id={7} addPlayer={addToField} position={"defender"}/>
                    <PlayerCascader options={playersByPositions("defender")} id={8} addPlayer={addToField} position={"defender"}/>
                    <PlayerCascader options={playersByPositions("defender")} id={9} addPlayer={addToField} position={"defender"}/>
                <div className="playersPosition">
                    Вратарь
                </div>
                    <PlayerCascader options={playersByPositions("goalkeeper")} id={10} addPlayer={addToField} position={"goalkeeper"}/>
                <div className="saveButton">
                    <Button type="primary" onClick={saveTeam}>Сохранить состав</Button>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock