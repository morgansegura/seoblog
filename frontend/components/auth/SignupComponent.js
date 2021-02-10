import React, { useState } from 'react'
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
	const showError = () =>
		error ? (
			<div className='max-w-lg mx-auto mt-4 rounded-md bg-red-50 p-4'>
				<div className='flex'>
					<div className='flex-shrink-0'>
						<svg
							className='h-5 w-5 text-red-400'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<div className='ml-3'>
						<h3 className='text-sm font-medium text-red-800'>
							{error}
						</h3>
					</div>
				</div>
			</div>
		) : (
			''
		)
	const showMessage = () =>
		message ? (
			<div className='rounded-md mt-4 bg-green-50 p-4'>
				<div className='flex'>
					<div className='flex-shrink-0'>
						<svg
							className='h-5 w-5 text-green-400'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<div className='ml-3'>
						<p className='text-sm font-medium text-green-800'>
							{message}
						</p>
					</div>
					<div className='ml-auto pl-3'>
						<div className='-mx-1.5 -my-1.5'>
							<button className='inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600'>
								<span className='sr-only'>Dismiss</span>
								<svg
									className='h-5 w-5'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='true'>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		) : (
			''
		)

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

	return (
		<React.Fragment>
			{signupForm()}
			{showError()}
			{showLoading()}
			{showMessage()}
		</React.Fragment>
	)
}

export default SignupComponent
