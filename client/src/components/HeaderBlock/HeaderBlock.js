import "./HeaderBlock.css"
import { Avatar } from 'antd';
import {useState, useEffect, useCallback} from "react"
import {useHttp} from "../../hooks/http.hook"
import { UserOutlined } from '@ant-design/icons';

const HeaderBlock = (props)=>{
    const {request} = useHttp()
    const [email, setEmail] = useState()
    console.log(email);

    const getInfo = useCallback(async () => {
        try {
            const data = await request('/api/info/getInfo', 'POST', {id: localStorage.getItem('userData')})
            setEmail(data.email)
        } catch (e) {}
    }, [request])

    useEffect(()=>{
        getInfo()
    }, [getInfo])


    if(!email){
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