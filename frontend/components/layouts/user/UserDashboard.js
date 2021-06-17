import { useState } from 'react'
import BaseLayout from '@layouts/BaseLayout'
import Container from '@core/structure/Container'
import IconClose from '@core/icons/IconClose'

import styles from './UserDashboard.module.scss'

const UserDashboard = ({ title }) => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<>
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

								{props.open && (
									<div
										className={styles.navMenuIcon}
										onClick={props.open}>
										<IconMenu />
									</div>
								)}
							</>
						) : (
							<>
								<Link href="/signup">
									<a className={styles.navItem}>Signup</a>
								</Link>
								<Link href="/signin"></Link>
							</>
						)}
					</nav>
				</Container>
			</Header>
		<Container className={styles.container}>
			<div
				className={`${styles.popoutMenu} ${
					toggleMenu && styles.active
				}`}>
				<div className={styles.close} onClick={handleToggleMenu}>
					<IconClose />
				</div>
				<div className={styles.menu}>
					<div className={styles.menuTitle}>Tag</div>
					<div className={styles.menuItem}>Show Tags</div>
					<div className={styles.menuItem}>Add Tag</div>
					<div className={styles.divider}></div>
					<div className={styles.menuTitle}>Category</div>
					<div className={styles.menuItem}>Show Categories</div>
					<div className={styles.menuItem}>Add Category</div>
					<div className={styles.divider}></div>
					<div className={styles.menuTitle}>Post</div>
					<div className={styles.menuItem}>Show Posts</div>
					<div className={styles.menuItem}>Add Post</div>
					<div className={styles.divider}></div>
				</div>
			</div>
			{title}
		</Container>
		<>
	)
}

export default UserDashboard
