import React from "react"
import Link from "next/link"
import { Layout } from "../components/shared"
import { SigninComponent } from "../components/auth/"

const Signin = () => {
	return (
		<Layout layoutClasses='bg-gray-100 bg-opacity-50'>
			<div className='max-w-md mx-auto transform translate-y-1/4'>
				<div className='px-8 py-12 bg-white border border-gray-200 rounded-md shadow '>
					<h2 className='pb-2 text-lg font-semibold'>
						Signin to your account
					</h2>
					<SigninComponent />
				</div>
				<div className='py-8 text-sm text-center text-gray-500'>
					Don't have an account?{" "}
					<Link href='/signup'>
						<a className='inline-block font-semibold text-purple-500 transition duration-300 ease-out border-b border-transparent hover:border-purple-500'>
							Signup
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	)
}

export default Signin
