import "./InfoBlock.css"
import {useState, useEffect, useContext} from "react"
import {useHttp} from "../../hooks/http.hook"
import teamsInfo from "./data/teamsInfo"
import PlayerCascader from "./PlayerCascader/PlayerCascader"
import Loader from "../Loader/Loader"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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

    const addToField = (id, logo)=>{
        console.log(fieldPlayers)
        console.log(id, logo)
        let test = fieldPlayers
        test[id] = logo
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
                        <div className="fieldPostion">
                            <Avatar key={Date.now()} src={fieldPlayers == null  ? null : fieldPlayers[0]} />
                        </div>
                        <div className="fieldPostion">
                            <Avatar key={Date.now()} src={fieldPlayers == null  ? null : fieldPlayers[1]} />
                        </div>
                </div>
                <div className="positionsWrapper">
                        <div className="fieldPostion">
                            <Avatar key={Date.now()} src={fieldPlayers == null  ? null : fieldPlayers["2"]} />
                        </div>
                        <div className="fieldPostion">
                            <Avatar key={Date.now()} src={fieldPlayers == null  ? null : fieldPlayers[3]} />
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
                    <PlayerCascader options={playersByPositions("forward")} id={0} addPlayer={addToField} />
                    <PlayerCascader options={playersByPositions("forward")} id={1} addPlayer={addToField} />
                <div className="playersPosition">
                    Полузащитники
                </div>
                    <PlayerCascader options={playersByPositions("midfielder")} id={2} addPlayer={addToField} />
                    <PlayerCascader options={playersByPositions("midfielder")} id={3} addPlayer={addToField} />
                    <PlayerCascader options={playersByPositions("midfielder")} id={4} addPlayer={addToField} />
                    <PlayerCascader options={playersByPositions("midfielder")} id={5} addPlayer={addToField} />
                <div className="playersPosition">
                    Защитники
                </div>
                    <PlayerCascader options={playersByPositions("defender")} id={6} addPlayer={addToField} />
                    <PlayerCascader options={playersByPositions("defender")} id={7} addPlayer={addToField} />
                    <PlayerCascader options={playersByPositions("defender")} id={8} addPlayer={addToField} />
                    <PlayerCascader options={playersByPositions("defender")} id={9} addPlayer={addToField} />
                <div className="playersPosition">
                    Вратарь
                </div>
                    <PlayerCascader options={playersByPositions("goalkeeper")} id={10} addPlayer={addToField} />
            </div>
        </div>
    )
}

export default InfoBlock