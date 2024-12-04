import React, {useState} from 'react'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import s from './Register.module.scss'
const Register = () => {
	const location = useLocation()
	const onFinish = values => {
		console.log('Received values of form: ', values)
	}

	return (
		<div className={s.wrapper}>
			<Form
			name='login'
			initialValues={{
				remember: true,
			}}
			style={{
				maxWidth: 360,
			}}
			onFinish={onFinish}>
			<Form.Item
				name='username'
				rules={[
					{
						required: true,
						message: 'Please input your Username!',
					},
				]}>
				<Input prefix={<UserOutlined />} placeholder='Username' />
			</Form.Item>
			{location.pathname === '/register' && (
				<Form.Item
					name='email'
					rules={[
						{
							type: 'email',
							message: 'The input is not valid E-mail!',
						},
						{
							required: true,
							message: 'Please input your E-mail!',
						},
					]}>
					<Input prefix={<MailOutlined />} placeholder='Username' />
				</Form.Item>
			)}
			<Form.Item
				name='password'
				rules={[
					{
						required: true,
						message: 'Please input your Password!',
					},
				]}>
				<Input
					prefix={<LockOutlined />}
					type='password'
					placeholder='Password'
				/>
			</Form.Item>
			<Form.Item>
				<Flex justify='space-between' align='center'>
					<Form.Item name='remember' valuePropName='checked' noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					{location.pathname === '/login' && <Link to=''>Forgot password</Link>}
				</Flex>
			</Form.Item>

			<Form.Item>
				<Button block type='primary' htmlType='submit'>
					{location.pathname === '/login' ? 'Log In' : 'Sign In'}
				</Button>
				{location.pathname === '/login' ? <Link to='/register'>Register now!</Link> : <Link to='/login'>Log in</Link>}
			</Form.Item>
		</Form>
		</div>
	)
}
export default Register
