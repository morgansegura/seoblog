// Core Components
import Shadow from '@components/core/utils/Shadow'

// Styles
import * as s from './Box.styled'

const Box = ({ children, as = 'div', ...props }) => {
	return (
		<s.Container as={as} {...props}>
			{children}
		</s.Container>
	)
}

export default Box
