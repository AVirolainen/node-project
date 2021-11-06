import "./PlayerCascader.css"
import { Cascader } from 'antd';

const PlayerCascader = (props)=>{

  function onChange(value) {
    let logo = ""
    props.options.map(item=>{
      if(item.value == value[0]){
        logo = item.logo
      }
    })

    props.addPlayer(props.id, logo)
  }

  return (
      <div className="playerCascader">
        <Cascader options={props.options} onChange={onChange} placeholder="Please select" />
      </div>
  )
}

export default PlayerCascader