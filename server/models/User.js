import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		id: {
			type: Number
		},
		chats: [
			{
				id: {
					type: Number,
				},
				title: {
					type: String
				},
				idUser: {
					type: Number,
				}
			},
		],
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('User', UserSchema)
