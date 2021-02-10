import React from 'react'
import Link from 'next/link'
import SignupComponent from '../components/auth/SignupComponent'
import Layout from '../components/Layout'

const Signup = () => {
	return (
		<Layout layoutClasses='bg-gray-100 bg-opacity-50'>
			<div className='max-w-md mx-auto transform translate-y-1/4'>
				<div className=' bg-white shadow rounded-md py-12 px-8 border border-gray-200'>
					<h2 className='pb-2 font-semibold text-lg'>
						Create an Account
					</h2>
					<SignupComponent />
				</div>
				<div className='py-8 text-center text-gray-500 text-sm'>
					Already have an account?{' '}
					<Link href='/signin'>
						<a className='font-semibold text-purple-500 inline-block border-b border-transparent hover:border-purple-500 transition duration-300 ease-out'>
							Signin
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	)
}

export default Signup
