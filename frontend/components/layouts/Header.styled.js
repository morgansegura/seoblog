import styled from 'styled-components'
import { f250 } from '@styled/fonts'
import { sp400 } from '@styled/spacing'
import { grey300 } from '@styled/colors'

export const Header = styled.header`
	padding-top: ${sp400};
	padding-bottom: ${sp400};
	border-bottom: 1px solid ${grey300};
`

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Logo = styled.a`
	flex: 1 0 auto;
	svg {
		width: 30px;
	}
`

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`

export const NavItem = styled.a`
	${f250}

	cursor: pointer;
	margin-left: $sp-300;
`

export const NavItemAlt = styled.a`
	${f250}

	cursor: pointer;
	margin-left: $sp-300;
`

export const NavIcon = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-left: $sp-600;
	transition: opacity 0.3s ease-out;

	svg {
		width: 20px;
	}

	&:hover,
	&:active {
		opacity: 0.5;
	}
`
