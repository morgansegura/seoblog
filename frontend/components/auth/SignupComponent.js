import { data } from 'autoprefixer'
import { useState } from 'react'
import { signup } from '../../actions/auth'

const SignupComponent = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		error: '',
		loading: false,
		message: '',
		showForm: true,
	})
	const { name, email, password, error, loading, message, showform } = values

	const handleSubmit = e => {
		e.preventDefault()
		setValues({ ...values, loading: true, error: false })
		const user = { name, email, password }

		signup(user).then(data => {
			console.log(data)
			if (data.error) {
				setValues({ ...values, error: data.error, loading: false })
			} else {
				setValues({
					...values,
					name: '',
					email: '',
					password: '',
					error: '',
					loading: false,
					message: data.message,
					showForm: false,
				})
			}
		})

		// console.log({
		// 	name,
		// 	email,
		// 	password,
		// 	error,
		// 	loading,
		// 	message,
		// 	showform,
		// })
	}
	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value })
	}

	const showLoading = () =>
		loading ? <div className=''>Loading...</div> : ''
	const showError = () => (error ? <div className=''>{error}</div> : '')
	const showMEssage = () => (message ? <div className=''>{message}</div> : '')

	const signupForm = () => {
		return (
			<form onSubmit={handleSubmit} className=''>
				<div className='my-4'>
					<input
						value={name}
						onChange={handleChange('name')}
						type='text'
						placeholder='Type your name'
						className='my-2 w-full py-2 px-4 rounded-md border border-gray-200'
						autoComplete='name'
					/>
					<input
						value={email}
						onChange={handleChange('email')}
						type='email'
						placeholder='Type your email address'
						className='my-2 w-full py-2 px-4 rounded-md border border-gray-200'
						autoComplete='username'
					/>
					<input
						value={password}
						onChange={handleChange('password')}
						type='password'
						placeholder='Type your email address'
						className='my-2 w-full py-2 px-4 rounded-md border border-gray-200'
						autoComplete='current-password'
					/>
				</div>
				<button
					type='submit'
					className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
					Submit
				</button>
			</form>
		)
	}
	return signupForm()
}

export default SignupComponent
