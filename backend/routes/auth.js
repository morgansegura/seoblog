const express = require('express')
const router = express.Router()
const {
	requireSignin,
	signup,
	signin,
	signout,
} = require('../controllers/auth')

// validators
const { runValidation } = require('../validators')
const {
	userSignupValidator,
	userSigninValidator,
} = require('../validators/auth')

router.post('/signup', userSignupValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.get('/signout', signout)

// test
router.get('/secret', requireSignin, (req, res) => {
	res.json({
		message:
			'You have access to this secret page, basically you are logged in properly. ^^',
	})
})

module.exports = router
