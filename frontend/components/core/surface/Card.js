// Core Components
import Shadow from '@components/core/utils/Shadow'

// Styles
import styles from './Card.module.scss'

const Card = ({ children, className: givenClassName, shadow, ...props }) => {
	const classes = givenClassName
		? `${styles.container} ${givenClassName}`
		: styles.container

	return (
		<Shadow shadow={shadow}>
			<div className={classes}>{children}</div>
		</Shadow>
	)
}

export default Card
