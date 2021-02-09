const User = require('../models/user')
const shortId = require('shortid')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

exports.signup = (req, res) => {
	User.findOne({ email: req.body.email }).exec((err, user) => {
		if (user) {
			return res.status(400).json({
				error: 'A user with this email address already exists.',
			})
		}

		const { name, email, password } = req.body
		let username = shortId.generate()
		let profile = `${process.env.CLIENT_URL}/profile/${username}`

		let newUser = new User({ name, email, password, profile, username })
		newUser.save((err, success) => {
			if (err) {
				return res.status(400).json({
					error: err,
				})
			}
			// res.json({
			// 	user: success,
			// })
			res.json({
				message: 'Signup successful! Please sign in.',
			})
		})
	})
}

exports.signin = (req, res) => {
	const { email, password } = req.body
	// check if user exists
	User.findOne({ email }).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error:
					'There is no account for a user with that email address. Please signup.',
			})
		}
		// authenticate
		if (!user.authenticate(password)) {
			return res.status(400).json({
				error: 'Email and password combination does not match.',
			})
		}
		// generate a json web token and send to client
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '1d',
		})

		res.cookie('token', token, { expiresIn: '1d' })
		const { _id, username, name, email, role } = user
		return res.json({
			token,
			user: { _id, username, name, email, role },
		})
	})
}

exports.signout = (req, res) => {
	res.clearCookie('token')
	res.json({
		message: 'You have successfully signed out.',
	})
}

exports.requireSignin = expressJwt({
	secret: process.env.JWT_SECRET,
	algorithms: ['HS256'], // added later
	userProperty: 'auth',
})
