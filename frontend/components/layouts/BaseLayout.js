import { useState } from 'react'
import Link from 'next/link'
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
			isAuth: false,
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
						{!isLoggedIn ? (
							<>
								<Link href="/signup">
									<a className={styles.navItem}>Signup</a>
								</Link>
								<Link href="/signin">
									<a className={styles.navItem}>Signin</a>
								</Link>
							</>
						) : (
							<>
								<Link href="/secret">
									<a className={styles.navItem}>Secret</a>
								</Link>
								<Link href="/signout">
									<a className={styles.navItem}>Signout</a>
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
