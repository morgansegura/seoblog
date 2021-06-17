import NProgress from 'nprogress'
import Router from 'next/router'
import Link from 'next/link'
// Auth Middleware
import { isAuth, signout } from '@actions/auth'
// Core Components
import Container from '@core/structure/Container'
// Icons
import IconCodeLockSolid from '@core/icons/IconCodeLockSolid'
import IconMenu from '@core/icons/IconMenu'
// Styles
import styles from './Header.module.scss'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Header = ({ children, open, ...props }) => {
	const navigation = [
		{
			id: 1,
			label: 'Home',
			path: '/',
		},
	]
	const userNavigation = [
		{
			id: 1,
			label: 'Dashboard',
			path: '/user',
		},
	]
	const adminNavigation = [
		{
			id: 1,
			label: 'Dashboard',
			path: '/admin',
		},
	]
	return (
		<header className={styles.header} {...props}>
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
								<a className={styles.navItem}>{nav.label}</a>
							</Link>
						))}
					{isAuth() ? (
						<>
							{isAuth().role === 0 && (
								<>
									<Link href={`/user`}>
										<a className={styles.navItem}>
											Dashboard
										</a>
									</Link>

									<div
										onClick={() =>
											signout(() =>
												Router.replace(`/signin`)
											)
										}
										className={styles.navItem}>
										Signout
									</div>
								</>
							)}
							{isAuth().role === 1 && (
								<>
									<Link href={`/admin`}>
										<a className={styles.navItem}>
											Dashboard
										</a>
									</Link>
									<div
										onClick={() =>
											signout(() =>
												Router.replace(`/signin`)
											)
										}
										className={styles.navItem}>
										Signout
									</div>
									<div
										className={styles.navMenuIcon}
										onClick={open}>
										<IconMenu />
									</div>
								</>
							)}
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
		</header>
	)
}

export default Header
