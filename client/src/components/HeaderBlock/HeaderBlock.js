import "./HeaderBlock.css"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const HeaderBlock = (props)=>{
    return(
        <div className="headerBlock">
            <div className="upperPartHeader" />
            <div className="bottomPartHeader">
                <div className="avatarBox">
                    <Avatar shape="square" size={184} icon={<UserOutlined />} />
                </div>
                <div className="headerEmail">
                    rudenkostas2@gmail.com
                </div>
                
            </div>
        </div>
    )
}

export default HeaderBlock