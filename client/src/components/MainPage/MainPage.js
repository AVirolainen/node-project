import React, {useContext} from 'react'
import "./MainPage"
import {AuthContext} from "../../context/AuthContext.js"

const MainPage = ()=>{
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
    }
    
    return(
        <div>
            <li>
                <a href="/" onClick={logoutHandler}>Выйти</a>
            </li>
        </div>
    )
}

export default MainPage