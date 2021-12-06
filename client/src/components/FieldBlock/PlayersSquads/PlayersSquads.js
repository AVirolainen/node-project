import "./PlayersSquads.css"
import React, {useContext, useEffect, useState} from 'react'
import { Carousel } from 'antd';
import {useHttp} from "../../../hooks/http.hook"

const PlayersSquads = ()=>{
    const {request} = useHttp()
    const [squads, setSquads] = useState([])

    useEffect(()=>{
        const getSquads = async ()=>{
            const data = await request('/api/team/getTeams')
            setSquads(data)
        }
        getSquads()

        }, []
    )
    return(
        <Carousel effect="fade">
        {
            squads.map(item=>{
                return (
                <div className="carouselItem">
                    <div className="idValue">ID игрока: {item.owner}</div>
                {
                    item.team.map(innerItem=>{
                        return(
                            <div className="playerWrapper">
                                <div><img className="carouselLogo" src={innerItem.logo}></img></div>
                                <div className="carouselPlayer">{innerItem.player}</div>
                                <div className="carouselPosition">{innerItem.position == "forward" ? "Нападающий" : 
                                                   innerItem.position == "midfielder" ? "Полузащитник" :
                                                   innerItem.position == "defender" ? "Защитник" :
                                                   innerItem.position == "goalkeeper" ? "Вратарь" : " "}</div>
                            </div>
                        )
                    })
                }
                </div>)
            })
        }
        </Carousel>
    )
}

export default PlayersSquads

