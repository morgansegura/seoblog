import Link from 'next/link'
import Ripple from '@core/utils/Ripple'

// Styled
import * as s from './Button.styled'

const Button = ({ children, as = 'div', ...props }) => {
	return (
		<s.Button as={as} {...props}>
			<div>{children}</div>
			<Ripple />
		</s.Button>
	)
}

export default Button
