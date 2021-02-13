import React from "react"
import Link from "next/link"
import { SignupComponent } from "../components/auth/"
import { Container, Layout } from "../components/shared"

const Signup = () => {
	return (
		<Layout layoutClasses='bg-gray-100 bg-opacity-50'>
			<Container size='sm' className='transform lg:translate-y-1/4'>
				<div className='px-8 py-12 bg-white border border-gray-200 rounded-md shadow '>
					<h2 className='pb-2 text-lg font-semibold'>
						Create an Account
					</h2>
					<SignupComponent />
				</div>
				<div className='py-8 text-sm text-center text-gray-500'>
					Already have an account?{" "}
					<Link href='/signin'>
						<a className='inline-block font-semibold text-purple-500 transition duration-300 ease-out border-b border-transparent hover:border-purple-500'>
							Signin
						</a>
					</Link>
				</div>
			</Container>
		</Layout>
	)
}

export default Signup
