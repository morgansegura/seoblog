import * as s from './Container.styled'

const Container = ({
	className: givenClassName,
	children,
	as = 'div',
	auto = true,
	gutters = true,
	buffer = true,
	responsive = false,
	fill,
	maxWidth,
	...props
}) => {
	// sm:default, md, lg, xl
	return (
		<s.Container
			as={as}
			maxWidth={maxWidth}
			auto={auto}
			gutters={gutters}
			responsive={responsive}
			buffer={buffer}
			className={givenClassName}
			fill={fill}
			{...props}>
			{children}
		</s.Container>
	)
}

export default Container
