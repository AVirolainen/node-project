import "./FieldBlock.css"
import PlayersSquads from "./PlayersSquads/PlayersSquads"

const FieldBlock = ()=>{
    return(
        <div className="fieldBlock">
            <div className="squadsWrapper">
                Составы других игроков
                <PlayersSquads />
            </div>
        </div>
    )
}

export default FieldBlock