import React, { useState, useEffect } from "react"
import Link from "next/link"
import Router from "next/router"
import { signup, isAuth } from "../../../actions/auth"
import { Toast } from "../../../components/shared"
import { BiCheckCircle, BiError, BiLoader } from "react-icons/bi"

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
			<Toast
				className='my-4 text-blue-700 bg-blue-50'
				message='Loading...'
				icon={<BiLoader className='w-5 h-5 text-blue-700' />}
			/>
		) : (
			""
		)
	const showError = () =>
		error ? (
			<Toast
				className='my-4 text-red-700 bg-red-50'
				message={error}
				icon={<BiError className='w-5 h-5 text-red-700' />}
			/>
		) : (
			""
		)
	const showMessage = () =>
		message ? (
			<Toast
				className='my-4 text-green-700 bg-green-50'
				message={`${message} Please <Link href='/signin'><a className='inline-block font-semibold text-purple-500 transition duration-300 ease-out border-b border-transparent hover:border-purple-500'>Signin</a></Link>`}
				icon={<BiCheckCircle className='w-5 h-5 text-green-700' />}
			/>
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
