// import { forwardRef } from 'react'
import * as s from './Text.styled'

const Text = ({
	size,
	children,
	className: givenClassName,
	as = 'div',
	...props
}) => {
	const className = givenClassName

	return (
		<s.Tag as={as} className={className} size={size} {...props}>
			{children}
		</s.Tag>
	)
}

export default Text
