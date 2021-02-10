import Link from 'next/link'
import { APP_NAME } from '../config'

const Header = ({ children, className }) => {
	return (
		<header className={className}>
			<div className='w-full max-w-6xl mx-auto py-4 px-8 flex justify-between items-center'>
				<Link href='/'>
					<a>{APP_NAME}</a>
				</Link>
				<div className='flex-1 flex justify-between items-center text-sm text-gray-500'>
					<div className='flex-1 flex justify-center space-x-4'>
						<Link href='/'>
							<a className='hover:text-gray-700 transition duration-300 ease-out'>
								Home
							</a>
						</Link>
						<div>Link2</div>
					</div>
					<div className='flex justify-end items-center space-x-4'>
						<Link href='/signin'>
							<a className='hover:text-gray-700 transition duration-300 ease-out'>
								Signin
							</a>
						</Link>
						<Link href='/signup'>
							<a className='cursor-pointer rounded py-1 px-2 bg-blue-500 text-blue-100 hover:bg-blue-700 transition duration-300 ease-out'>
								Signup
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
