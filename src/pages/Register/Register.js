import React from "react";
import { Form, Input, Button, Space, Card } from "antd";
import "./Register.css";

const Register = () => {
	return (
		<div className="register">
			<Card className="card-register">
				<h1 style={{textAlign:'center'}}>Register</h1>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					// onFinish={onFinish}
					// onFinishFailed={onFinishFailed}
					autoComplete="off"
					className="form-register"
				>
					<Form.Item
						label="Name"
						name="name"
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						rules={[{ required: true, message: "Please input your name!" }]}
					>
						<Input placeholder="enter your name" className="input" />
					</Form.Item>
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
					<Form.Item
						label="Repeat Password"
						name="repeatPassword"
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						rules={[{ required: true, message: "Please re-input your password!" }]}
					>
						<Input.Password placeholder="repeat your password" className="input" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button htmlType="submit" className="btn-login">
							Register
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Register;
