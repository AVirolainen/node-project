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
    console.log(squads)
    return(
        <Carousel effect="fade">
        {
            squads.map(item=>{
                return <div className="carouselItem">
                    {
                        item.team.map(innerItem=>{
                            return(
                                <div className="playerWrapper">
                                    <div><img className="carouselLogo" src={innerItem.logo}></img></div>
                                    <div className="carouselPlayer">{innerItem.player}</div>
                                </div>
                            )
                        })
                    }
                </div>
            })
        }
        </Carousel>
    )
}

export default PlayersSquads


// <Carousel effect="fade">
// <div className="carouselItem">
//     {
//         squads.map(item=>{
//             return <div className="playerItem">{item.team[0].player}</div>
//         })
//     }
// </div>
// <div className="carouselItem">
//     <h3>2</h3>
// </div>
// <div className="carouselItem">
//     <h3>3</h3>
// </div>
// <div className="carouselItem">
//     <h3>4</h3>
// </div>
// </Carousel>