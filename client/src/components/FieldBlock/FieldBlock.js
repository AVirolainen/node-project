import "./FieldBlock.css"
import PlayersSquads from "./PlayersSquads/PlayersSquads"

const FieldBlock = ()=>{
    return(
        <div className="fieldBlock">
                Составы других игроков
                <PlayersSquads />
        </div>
    )
}

export default FieldBlock