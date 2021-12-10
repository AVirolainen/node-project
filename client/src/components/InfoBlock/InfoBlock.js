import "./InfoBlock.css"
import {useState, useEffect, useContext, useCallback} from "react"
import {useHttp} from "../../hooks/http.hook"
import players from "./data/players"
import PlayerCascader from "./PlayerCascader/PlayerCascader"
import Loader from "../Loader/Loader"
import { Button, Modal } from 'antd'
import FootballField from "./FootballField/FootballField"
import {AuthContext} from "../../context/AuthContext"


function capitalizeFirstLetter(string) {
    if(string.indexOf("-")){
        return string.split("-").map(a=>a.charAt(0).toUpperCase() + a.slice(1)).join("-")
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const InfoBlock = ()=>{
    const auth = useContext(AuthContext)
    const { request} = useHttp()
    const [playersList] = useState(players)
    const [fieldPlayers, setFieldPlayers] = useState({0: {}, 1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}, 8:{}, 9:{}, 10:{}})
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const getTeam = useCallback(async () => {
        try {
            console.log(auth.userId)
            const data = await request('/api/team/getTeam', 'POST', {id: auth.userId})
            data.map((item, index)=>{
                return {
                    'player': item.player,
                    'logo': item.logo,
                    'position': item.position,
                    'team': item.team
                }
                
            })
            setFieldPlayers(data)
            forceUpdate()
        } catch (e) {}
    }, [auth.userId, forceUpdate, request])

    useEffect(()=>{
        getTeam()
    }, [getTeam])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const addToField = (id, logo, player, position, team)=>{
        let test = fieldPlayers
        test[id] = {logo, player, position, team}
        setFieldPlayers(test)

        playersList.map(item => {
            if(item.team === team){
                let test2 = item
                console.log(position, player)
                test2[position].filter(innerItem => innerItem !== player.split(" ").reverse().join(" "))
                return test2
            }
            return item
        })
        forceUpdate()
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

        const getPlayers = async () =>{
            try{  
                await request('/api/team/saveTeam', 'POST', {id: localStorage.getItem('userData'), playersList: fieldPlayers})
            } catch(e){}
        }

        let test = Object.values(fieldPlayers).filter(item => {
            return item.player
        })
        console.log(test.length);
        if(test.length === 11){
            getPlayers()
        }
        else{
            showModal()
        }
    }

    if(playersList.length !== 20){
        return(
            <div className="infoBlock">
                <Loader />
            </div>  
        )
    }

    return(
        <div className="infoBlock">

            <FootballField fieldPlayers={fieldPlayers}/>

            <Modal title="Ошибка" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Состав не укомплектован</p>
                <p></p>
                <p></p>
            </Modal>

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
                <div className="playersPosition">
                    <Button type="primary" onClick={saveTeam}>Сохранить состав</Button>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock