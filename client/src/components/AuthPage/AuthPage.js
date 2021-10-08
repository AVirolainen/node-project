
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './AuthPage.css'  

function AuthPage() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                    onFinish={onFinish}>

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
