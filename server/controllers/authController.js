import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'
import User from '../models/User.js'

//Случайное число
const getRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min)
}

//Генерация веб-токена
const generateAccessToken = id => {
	const payload = {
		id,
	}
	return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' })
}

//Регистрация
export const register = async (req, res) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ message: 'Ошибка при регистрации', errors })
		}
		const password = req.body.password

		const salt = await bcrypt.genSalt(7)
		const hash = await bcrypt.hash(password, salt)

		const doc = new User({
			email: req.body.email,
			passwordHash: hash,
			username: req.body.username
		})
		const user = await doc.save()
		const token = generateAccessToken(user._id)
		const { passwordHash, ...userData } = user._doc
		res.json({
			...userData,
			token,
		})
	} catch (e) {
		console.log(e)
		res.status(400).json({
			message: 'Registration error',
		})
	}
}

//Логин
export const login = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!user) {
			return res
				.status(400)
				.json({ message: 'Пользователь с таким email не найден' })
		}
		if (user.email !== req.body.email) {
			return res
				.status(409)
				.json({ message: 'Не верные данные, повторите ввод' })
		}
		const isValidPass = await bcrypt.compare(
			req.body.password,
			user._doc.passwordHash
		)
		if (!isValidPass) {
			return res.status(401).json({ message: 'Введен неверный пароль' })
		}
		const token = generateAccessToken(user._id)
		const { passwordHash, ...userData } = user._doc
		res.json({
			...userData,
			token,
		})
		// return res.json({ token })
	} catch (e) {
		console.log(e)
		res.status(400).json({
			message: 'Login error',
		})
	}
}
// Получению пользователей
export const getUser = async (req, res) => {
	try {
		if (req.user && req.user.id) {
			const userId = req.user.id
			const user = await User.findById(userId)
			return res.json(user)
		} else {
			res.status(401).json({ error: 'Пользователь не авторизован' })
		}
	} catch (e) {
		console.log(e)
		res.status(400).json({
			message: 'Get Users error',
		})
	}
}
//Обновление
export const updateUserData = async (req, res) => {
	const userId = req.user.id
	const { arrayType, title, id, idUser } = req.body
	try {
		let updateObject = {}

		switch (arrayType) {
			case 'chats':
				updateObject = { $addToSet: { chats: { id, title, idUser } } }
				break
			default:
				return res.status(400).json({ error: 'Некорректный тип массива' })
		}
		const user = await User.findByIdAndUpdate(userId, updateObject, {
			new: true,
		})

		res.json(user)
	} catch (error) {
		console.error('Ошибка при обновлении данных пользователя:', error)
		res.status(500).json({ error: 'Ошибка при обновлении данных пользователя' })
	}
}
// Обновление пользователя
export const updateUser = async (req, res) => {
	const userId = req.user.id
	const update = req.body
	try {
		const user = await User.findByIdAndUpdate(userId, update, {
			new: true,
		})
		console.log(update)
		console.log(user)
	} catch (error) {
		console.log(error)
	}
}
