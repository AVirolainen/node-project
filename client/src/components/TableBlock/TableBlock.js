import './TableBlock.css'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'

const TableBlock = (props) => {
    const [table, setTable] = useState([])

    useEffect(() => {
        if (props.tableInfo) {
            setTable(
                Object.values(props.tableInfo).map((value, index) => {
                    value.position = index + 1
                    return value
                })
            )
        }
    }, [props.tableInfo])

    if (table.length === 0) {
        return (
            <div className="tableBlock">
                <Loader />
            </div>
        )
    }

    return (
        <div className="tableBlock">
            <div className="tableRow header">
                <div className="tablePosition">M</div>
                <div className="tableImage"></div>
                <div className="tableTeamName">Команда</div>
                <div className="tableTeamGames">И</div>
                <div className="tableTeamPoints">О</div>
            </div>
            {table.map((item, index) => {
                return (
                    <div className="tableRow row" key={index}>
                        <div className="tablePosition">{item.position}</div>
                        <div className="tableImage">
                            <img src={item.image} alt="club" />
                        </div>
                        <div className="tableTeamName">{item.team}</div>
                        <div className="tableTeamGames">{item.games}</div>
                        <div className="tableTeamPoints">{item.points}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default TableBlock
