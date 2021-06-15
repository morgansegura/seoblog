import { useState, useEffect } from 'react'
import Link from 'next/link'
import { signin, authenticate, isAuth } from '@actions/auth'
import Router from 'next/router'
// Components
import BaseLayout from '@layouts/BaseLayout'
import Container from '@core/structure/Container'
import Text from '@core/typography/Text'
import Button from '@core/interaction/Button'

import styles from './Signin.module.scss'

const Signin = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		error: '',
		loading: false,
		message: '',
		showForm: true,
	})

	const { email, password, error, loading, message, showForm } = values

	useEffect(() => {
		isAuth() && Router.push(`/`)
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		setValues({ ...values, loading: true, error: false })
		const user = { email, password }

		signin(user).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error, loading: false })
			} else {
				authenticate(data, () => {
					Router.push(`/`)
				})
			}
		})
	}

	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value })
	}

	const showLoading = () => (loading ? <div>Loading...</div> : '')
	const showError = () => (error ? <div>{error}</div> : '')
	const showMessage = () => (message ? <div>{message}</div> : '')

	const signinForm = () => {
		return (
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					className={styles.textInput}
					type="email"
					placeholder="Email"
					value={email}
					onChange={handleChange('email')}
				/>
				<input
					className={styles.textInput}
					type="password"
					placeholder="Password"
					value={password}
					onChange={handleChange('password')}
				/>
				<div className={styles.buttonBlock}>
					<Button type="submit" as="button" className={styles.button}>
						Signin
					</Button>
				</div>

				<Text as="p" className={styles.loginText}>
					<Link href="/signin">
						<a className={styles.link}></a>
					</Link>
				</Text>
			</form>
		)
	}

	return (
		<BaseLayout>
			<Container className={styles.container}>
				{showError()}
				{showLoading()}
				{showMessage()}
				{showForm && signinForm()}
			</Container>
		</BaseLayout>
	)
}

export default Signin
