import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { isAuth, signout } from '@actions/auth'
import Container from '@core/structure/Container'
import IconCodeLockSolid from '@core/icons/IconCodeLockSolid'

import styles from './BaseLayout.module.scss'

const Header = ({ children, className: givenClassName, ...props }) => {
	const classes = givenClassName
		? `${styles.header} ${givenClassName}`
		: styles.header
	return <header className={classes}>{children}</header>
}

const BaseLayout = ({ children, ...props }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const navigation = [
		{
			id: 1,
			label: 'Home',
			path: '/',
		},
	]

	return (
		<div {...props}>
			<Header className={styles.header}>
				<Container className={styles.headerContainer}>
					<Link href="/">
						<a className={styles.logo}>
							<IconCodeLockSolid />
						</a>
					</Link>
					<nav className={styles.nav}>
						{navigation &&
							navigation.map(nav => (
								<Link key={nav.id} href={nav.path}>
									<a className={styles.navItem}>
										{nav.label}
									</a>
								</Link>
							))}
						{isAuth() ? (
							<>
								{isAuth().role === 0 && (
									<Link href="/user">
										<a className={styles.navItem}>
											Dashboard
										</a>
									</Link>
								)}

								{isAuth().role === 1 && (
									<Link href="/admin">
										<a className={styles.navItem}>
											Dashboard
										</a>
									</Link>
								)}

								<div
									onClick={() =>
										signout(() => Router.replace(`/signin`))
									}
									className={styles.navItem}>
									Signout
								</div>
							</>
						) : (
							<>
								<Link href="/signup">
									<a className={styles.navItem}>Signup</a>
								</Link>
								<Link href="/signin">
									<a className={styles.navItem}>Signin</a>
								</Link>
							</>
						)}
					</nav>
				</Container>
			</Header>
			{children}
		</div>
	)
}

export default BaseLayout
