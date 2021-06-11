const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// Routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')

// App
const app = express()

// DB
mongoose
	.connect(process.env.DATABASE_LOCAL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB Connected'))

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(
	express.urlencoded({
		extended: true,
	})
)
app.use(cookieParser())

// CORS
if (process.env.NODE_ENV === 'development') {
	app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

// Routes Middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)

// Port
const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Port listening on port: ${port}`)
})
