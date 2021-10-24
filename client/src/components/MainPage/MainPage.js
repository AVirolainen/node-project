import React, {useContext, useEffect, useState} from 'react'
import "./MainPage.css"
import {AuthContext} from "../../context/AuthContext.js"
import HeaderBlock from "../HeaderBlock/HeaderBlock"
import InfoBlock from "../InfoBlock/InfoBlock"
import TableBlock from '../TableBlock/TableBlock'

import {useHttp} from "../../hooks/http.hook"

const MainPage = (props)=>{
    const auth = useContext(AuthContext)
    const [tableInfo, setTableInfo] = useState(null)
    const {request} = useHttp()
    console.log(tableInfo)

    useEffect(()=>{
        const getTable = async ()=>{
            const data = await request('/api/table')
            setTableInfo(data)
        }
        getTable()
        
    }, [request])

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
    }

    return(
        <div className="mainBlock">
            <HeaderBlock/>
            <div className="mainWrapper">
                <InfoBlock />
                <TableBlock />
            </div>
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </div>
    )
}

export default MainPage