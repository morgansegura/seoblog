import React, { Fragment, useState, useEffect, useRef } from "react"
import Router from "next/router"
import Link from "next/link"
import { isAuth, signout } from "../../../actions/auth"
import NProgress from "nprogress"
import { useOutsideClick } from "../../helpers"

import { APP_NAME } from "../../../config"

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Header = ({ className }) => {
	const [toggleProfileNav, setToggleProfileNav] = useState(false)
	const [authCheck, setAuthCheck] = useState({
		authorized: false,
		role: 0,
		name: "",
	})
	const profileNavRef = useRef()

	useOutsideClick(profileNavRef, () => {
		if (toggleProfileNav) setToggleProfileNav(false)
	})

	useEffect(() => {
		if (isAuth()) {
			setAuthCheck({
				authorized: Boolean(isAuth()),
				role: isAuth().role,
				name: isAuth().name,
			})
		}
	}, [])

	return (
		<header className={className}>
			<div className='flex items-center justify-between w-full px-4 py-4 mx-auto lg:px-8'>
				<Link href='/'>
					<a>{APP_NAME}</a>
				</Link>
				<div className='flex items-center justify-between flex-1 text-sm text-gray-500'>
					<div className='flex justify-center flex-1 space-x-4'>
						<Link href='/'>
							<a className='transition duration-300 ease-out hover:text-gray-700'>
								Home
							</a>
						</Link>
					</div>
					<div className='flex items-center justify-end space-x-4'>
						{!authCheck.authorized ? (
							<Fragment>
								<Link href='/signin'>
									<a className='transition duration-300 ease-out hover:text-gray-700'>
										Signin
									</a>
								</Link>
								<Link href='/signup'>
									<a className='px-2 py-1 text-blue-100 transition duration-300 ease-out bg-blue-500 rounded cursor-pointer hover:bg-blue-700'>
										Signup
									</a>
								</Link>
							</Fragment>
						) : (
							<div className='relative flex-shrink-0 ml-5'>
								<div>
									<button
										onClick={() =>
											setToggleProfileNav(
												!toggleProfileNav
											)
										}
										type='button'
										className='flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500'
										id='user-menu'
										aria-haspopup='true'>
										<span className='sr-only'>
											Open user menu
										</span>
										<img
											className='w-8 h-8 rounded-full'
											src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
											alt=''
										/>
									</button>
								</div>

								<div
									ref={profileNavRef}
									className={`absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 ease-linear ${
										toggleProfileNav
											? "transform opacity-100 scale-100 z-1"
											: "transform opacity-0 scale-95 -z-1"
									}`}
									role='menu'
									aria-orientation='vertical'
									aria-labelledby='user-menu'>
									{authCheck.role === 1 && (
										<Link href='/admin'>
											<a
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
												role='menuitem'>
												Your Dashboard
											</a>
										</Link>
									)}
									{authCheck.role === 0 && (
										<Link href='/user'>
											<a
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
												role='menuitem'>
												Your Dashboard
											</a>
										</Link>
									)}
									<div
										onClick={() =>
											signout(() =>
												Router.replace(`/signin`)
											)
										}>
										<a
											className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
											role='menuitem'>
											Sign out
										</a>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
