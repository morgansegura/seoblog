import styles from './Container.module.scss'

const Lane = ({
	children,
	className: givenClassName,
	buffer = true,
	maxWidth,
	...props
}) => {
	const convertMaxWidth = maxWidth => {
		switch (maxWidth) {
			case 'sm':
				return styles.sm
				break
			case 'md':
				return styles.md
				break
			case 'xl':
				return styles.xl
				break

			default:
				return styles.lg
		}
	}
	let className =
		givenClassName && maxWidth
			? styles.container +
			  ' ' +
			  convertMaxWidth(maxWidth) +
			  ' ' +
			  givenClassName
			: givenClassName
			? styles.container + ' ' + givenClassName
			: maxWidth
			? styles.container + ' ' + convertMaxWidth(maxWidth)
			: styles.container
	// sm:default, md, lg, xl
	return (
		<div className={className} {...props}>
			{children}
		</div>
	)
}

export default Lane
