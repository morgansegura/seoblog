import * as s from './Container.styled'

const Container = ({
	className: givenClassName,
	children,
	as = 'div',
	gap = false,
	...props
}) => {
	// sm:default, md, lg, xl
	return (
		<s.Container as={as} gap={gap} className={givenClassName} {...props}>
			{children}
		</s.Container>
	)
}

export default Container
