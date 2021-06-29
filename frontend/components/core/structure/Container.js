import * as s from './Container.styled'

const Container = ({
	className: givenClassName,
	children,
	as = 'div',
	buffer = true,
	maxWidth,
	...props
}) => {
	// sm:default, md, lg, xl
	return (
		<s.Container as={as} className={givenClassName} {...props}>
			{children}
		</s.Container>
	)
}

export default Container
