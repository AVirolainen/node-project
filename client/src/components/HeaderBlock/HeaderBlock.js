import "./HeaderBlock.css"
import { Avatar } from 'antd';
import {useState, useEffect, useContext, useCallback} from "react"
import {useHttp} from "../../hooks/http.hook"
import { UserOutlined } from '@ant-design/icons';

const HeaderBlock = (props)=>{
    const {loading, error, request, clearError} = useHttp()
    const [email, setEmail] = useState("")
    console.log(email);

    const getInfo = useCallback(async () => {
            try {
                const data = await request('/api/info/getInfo', 'POST', {id: localStorage.getItem('userData')})
                setEmail(data.email)
            } catch (e) {}
    }, [])

    useEffect(()=>{
        getInfo()
    }, [])
    
    if(email.length == 0){
        return(
            <div>qq</div>
        )
    }

    return(
        <div className="headerBlock">
            <div className="upperPartHeader" />
            <div className="bottomPartHeader">
                <div className="avatarBox">
                    <Avatar shape="square" size={184} icon={<UserOutlined />} />
                </div>
                <div className="headerEmail">
                    {email}
                </div>
                
            </div>
        </div>
    )
}

export default HeaderBlock