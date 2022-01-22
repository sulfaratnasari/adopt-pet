import React from "react";
import { Form, Input, Button, Space, Card } from "antd";
import "./Login.css";
import logo from '../../componets/Images/logo.png'

const Login = () => {
	return (
		<div className="login">
			<Card className="card-login">
				<div className="btn-register">
					<Button type="text">Register</Button>
				</div>
				<img src={logo} className="logo-img-small" />
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					// onFinish={onFinish}
					// onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Email"
						name="email"
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						rules={[{ required: true, message: "Please input your email!" }]}
					>
						<Input placeholder="enter your email" className="input" />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						rules={[{ required: true, message: "Please input your password!" }]}
					>
						<Input.Password placeholder="enter your password" className="input" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button htmlType="submit" className="btn-login">
							Login
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
