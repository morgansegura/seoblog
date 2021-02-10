import React from 'react'
import SignupComponent from '../components/auth/SignupComponent'
import Layout from '../components/Layout'

const Signup = () => {
	return (
		<Layout>
			<div className='w-full max-w-6xl mx-auto p-8'>
				<div className='max-w-md mx-auto shadow rounded p-8 transform translate-y-1/2'>
					<h2 className='pb-2'>Signup Page</h2>
					<SignupComponent />
				</div>
			</div>
		</Layout>
	)
}

export default Signup
