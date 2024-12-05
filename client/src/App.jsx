import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Register from './page/Register/Register.jsx'
import Home from './page/Home/Home.jsx'

const App = () => {
	const [users, setUsers] = useState([])
	const fetchUsers = async () => {
		const response = await axios.get('http://localhost:5000/api/get-users')
		setUsers(response.data)
	}

	useEffect(() => {
		fetchUsers()
	}, [])

	return (
		<Routes>
			<Route path='/' element={<Home users={users} />} />
			<Route path='/login' element={<Register />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	)
}

export default App
