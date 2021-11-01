import "./PlayerCascader.css"
import { Cascader } from 'antd';

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
        },
      ],
    },
  ];

const PlayerCascader = (props)=>{
    return (
        <div className="playerCascader">
          <Cascader options={props.options} placeholder="Please select" />
        </div>
    )
}

export default PlayerCascader