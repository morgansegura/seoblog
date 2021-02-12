import React, { useState, useEffect } from "react"
import Link from "next/link"
import Router from "next/router"
import { signup, isAuth } from "../../../actions/auth"

const SignupComponent = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		error: "",
		loading: false,
		message: "",
		showForm: true,
	})
	const { name, email, password, error, loading, message, showForm } = values

	useEffect(() => {
		isAuth() && Router.push(`/`)
	}, [isAuth])

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
					name: "",
					email: "",
					password: "",
					error: "",
					loading: false,
					message: data.message,
					showForm: false,
				})
				Router.push(`/signin`)
			}
		})
	}
	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value })
	}

	const showLoading = () =>
		loading ? (
			<div className='p-4 mt-4 rounded-md bg-green-50'>
				<div className='flex'>
					<div className='flex-shrink-0'>
						<svg
							className='w-5 h-5 text-green-400'
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
							Loading...
						</p>
					</div>
				</div>
			</div>
		) : (
			""
		)
	const showError = () =>
		error ? (
			<div className='max-w-lg p-4 mx-auto mt-4 rounded-md bg-red-50'>
				<div className='flex'>
					<div className='flex-shrink-0'>
						<svg
							className='w-5 h-5 text-red-400'
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
			""
		)
	const showMessage = () =>
		message ? (
			<div className='p-4 mt-4 rounded-md bg-green-50'>
				<div className='flex'>
					<div className='flex-shrink-0'>
						<svg
							className='w-5 h-5 text-green-400'
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
							{message} Please{" "}
							<Link href='/signin'>
								<a className='inline-block font-semibold text-purple-500 transition duration-300 ease-out border-b border-transparent hover:border-purple-500'>
									Signin
								</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		) : (
			""
		)

	const signupForm = () => {
		return (
			<form onSubmit={handleSubmit} className=''>
				<div className='my-4'>
					<input
						value={name}
						onChange={handleChange("name")}
						type='text'
						placeholder='Type your name'
						className='w-full px-4 py-2 my-2 border border-gray-200 rounded-md'
						autoComplete='name'
					/>
					<input
						value={email}
						onChange={handleChange("email")}
						type='email'
						placeholder='Type your email address'
						className='w-full px-4 py-2 my-2 border border-gray-200 rounded-md'
						autoComplete='username'
					/>
					<input
						value={password}
						onChange={handleChange("password")}
						type='password'
						placeholder='Type your email address'
						className='w-full px-4 py-2 my-2 border border-gray-200 rounded-md'
						autoComplete='current-password'
					/>
				</div>
				<button
					type='submit'
					className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
					Submit
				</button>
			</form>
		)
	}

	return (
		<React.Fragment>
			{showLoading()}
			{showError()}
			{showMessage()}
			{showForm && signupForm()}
		</React.Fragment>
	)
}

export default SignupComponent
