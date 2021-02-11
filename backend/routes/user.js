const express = require('express')
const router = express.Router()
const {
	requireSignin,
	authMiddleware,
	adminMiddleware,
} = require('../controllers/auth')
const { read } = require('../controllers/user')

router.get('/profile', requireSignin, authMiddleware)

module.exports = router
