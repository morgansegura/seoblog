import NProgress from 'nprogress'
import Router from 'next/router'
import Link from 'next/link'
// Auth Middleware
import { isAuth, signout } from '@actions/auth'
// Core Components
import Container from '@core/structure/Container'
// Icons
import IconSkull from '@core/icons/IconSkull'
import IconMenu from '@core/icons/IconMenu'
// Styles
import * as s from './Header.styled'

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

	return (
		<s.Header {...props}>
			<Container>
				<s.HeaderContainer>
					<Link href="/">
						<s.Logo>
							<IconSkull />
						</s.Logo>
					</Link>
					<s.Nav>
						{navigation &&
							navigation.map(nav => (
								<Link key={nav.id} href={nav.path}>
									<s.NavItem>{nav.label}</s.NavItem>
								</Link>
							))}
						{isAuth() ? (
							<>
								{isAuth().role === 0 && (
									<>
										<Link href={`/user`}>
											<s.NavItem>Dashboard</s.NavItem>
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
											<s.NavItem>Dashboard</s.NavItem>
										</Link>
										<s.NavItemAlt
											onClick={() =>
												signout(() =>
													Router.replace(`/signin`)
												)
											}>
											Signout
										</s.NavItemAlt>

										<s.NavIcon onClick={open}>
											<IconMenu />
										</s.NavIcon>
									</>
								)}
							</>
						) : (
							<>
								<Link href="/signup">
									<s.NavItem>Signup</s.NavItem>
								</Link>
								<Link href="/signin">
									<s.NavItem>Signin</s.NavItem>
								</Link>
							</>
						)}
					</s.Nav>
				</s.HeaderContainer>
			</Container>
		</s.Header>
	)
}

export default Header
