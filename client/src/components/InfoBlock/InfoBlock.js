import "./InfoBlock.css"
import {useState, useEffect, useContext} from "react"
import {useHttp} from "../../hooks/http.hook"
import teamsInfo from "./data/teamsInfo"

const InfoBlock = ()=>{

    const {loading, error, request, clearError} = useHttp()

    useEffect(()=>{

        const getPlayers = async (name, id, logo) =>{
            try{  
                console.log(name, id, logo)
                const data = await request('/api/players/', 'GET', {name: name, id: id, logo: logo})
                console.log('Data', data)
            } catch(e){}
        }

        teamsInfo.forEach((item)=>{
            getPlayers(item.teamName, item.teamId, item.teamLogoId)
        })
        

    }, [])

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
        </div>
    )
}

export default InfoBlock