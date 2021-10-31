import "./InfoBlock.css"
import {useState, useEffect, useContext} from "react"
import {useHttp} from "../../hooks/http.hook"


const InfoBlock = ()=>{

    const {loading, error, request, clearError} = useHttp()

    useEffect(()=>{

        const getPlayers = async () =>{
            try{  
                console.log("tyt")
                const data = await request('/api/players')
                console.log('Data', data)
            } catch(e){}
        }

        getPlayers()

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