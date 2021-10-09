import 'antd/dist/antd.css'
import {useState, useEffect} from "react"
import { Form, Input, Button, Checkbox, notification, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './AuthPage.css'  

import {useHttp} from "../../hooks/http.hook"

function AuthPage() {
    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email: "", password: ""
    })

    const registerHandler = async () =>{
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch(e){}
    }

    useEffect(()=>{
        notification["error"]({
            message: 'Error',
            description: error,
        });
    }, [error])

    const onFinish = (values) => {
        setForm({
            email: values.username,
            password: values.password
        })
        registerHandler()
    };




    return (
        <div className="authPage">
            <div className="authHeader">Football Fantasy</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    >

                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}>
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Password!',
                            },
                        ]}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" 
                                htmlType="submit" 
                                className="login-form-button" 
                                style={{ background: "#525252", borderColor: "#525252" }}>
                            Log in
                        </Button>

                        <Button type="primary" 
                                htmlType="submit" 
                                className="login-form-button" 
                                style={{ background: "#525252", borderColor: "#525252", marginTop: "10px"}}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            
        </div>
    );
}

export default AuthPage
