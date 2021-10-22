import React, {useContext} from 'react'
import "./MainPage.css"
import {AuthContext} from "../../context/AuthContext.js"
import HeaderBlock from "../HeaderBlock/HeaderBlock"

const MainPage = (props)=>{
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
    }

    return(
        <div className="mainBlock">
            <HeaderBlock/>
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </div>
    )
}

export default MainPage