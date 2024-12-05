import React from 'react'
import { useLocation } from 'react-router-dom'
import s from './Register.module.scss'
const Register = () => {
	const location = useLocation()

	return <div className={s.wrapper}>Register</div>
}
export default Register
