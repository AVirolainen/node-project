import { useState, useEffect, useContext, useCallback } from 'react'
import './MainPage.css'
import { AuthContext } from '../../context/AuthContext.js'
import InfoBlock from '../InfoBlock/InfoBlock'
import TableBlock from '../TableBlock/TableBlock'
import FieldBlock from '../FieldBlock/FieldBlock'
import TeamWeek from '../TeamWeek/TeamWeek'

import { useHttp } from '../../hooks/http.hook'

const MainPage = (props) => {
    const auth = useContext(AuthContext)
    const [tableInfo, setTableInfo] = useState(null)
    const { request } = useHttp()

    const getTable = useCallback(async () => {
        try {
            const data = await request('/api/table')
            setTableInfo(data)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        getTable()
    }, [getTable])

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
    }

    return (
        <div className="mainBlock">
            <div className="mainWrapper">
                <InfoBlock />
                <TableBlock tableInfo={tableInfo} />
            </div>
            <div className="mainWrapper">
                <FieldBlock />
                <TeamWeek />
            </div>
            <li style={{marginTop: "15px"}}>
                <a href="/" onClick={logoutHandler}>
                    Выйти
                </a>
            </li>
        </div>
    )
}

export default MainPage
