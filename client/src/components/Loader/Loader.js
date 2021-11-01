import "./Loader.css"
import {LoadingOutlined} from "@ant-design/icons" 

const Loader = ()=>{
    return(
        <div className="loaderBlock">
            <LoadingOutlined style={{ fontSize: '156px', color: 'gray' }}/>
        </div>
    )
}

export default Loader