import "./PlayersSquads.css"
import React, {useEffect, useState} from 'react'
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

        }, [request]
    )

    return(
        <Carousel effect="fade">
        {
            squads.map((item, index)=>{
                return (
                <div className="carouselItem" key={index}>
                    <div className="idValue">ID игрока: {item.owner}</div>
                {
                    item.team.map((innerItem, innerIndex)=>{
                        return(
                            <div className="playerWrapper" key={innerIndex}>
                                <div style={{
                                    display: "flex"
                                }}>
                                    <div><img className="carouselLogo" alt="carouselLogo" src={innerItem.logo}></img></div>
                                    <div className="carouselPlayer">{innerItem.player}</div>
                                </div>
                                <div className="carouselPosition">{innerItem.position === "forward" ? "Нападающий" : 
                                                   innerItem.position === "midfielder" ? "Полузащитник" :
                                                   innerItem.position === "defender" ? "Защитник" :
                                                   innerItem.position === "goalkeeper" ? "Вратарь" : " "}</div>
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

