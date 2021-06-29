// Core Components
import Overlay from '@core/utils/Overlay'

// Styles
import styles from './Shadow.module.scss'

const Shadow = ({ children, className: givenClassName, shadow, ...props }) => {
	const classes = givenClassName
		? `${styles.container} ${givenClassName}`
		: styles.container

	const shadowVariant = variant => {
		const maxVariant = 25
		switch (variant) {
			case 1: {
				return styles.shadow1
				break
			}
			case 2: {
				return styles.shadow2
				break
			}
			case 3: {
				return styles.shadow3
				break
			}
			case 4: {
				return styles.shadow4
				break
			}
			case 5: {
				return styles.shadow5
				break
			}
			default:
				return styles.shadow0
				break
		}
	}

	return (
		<div className={`${classes} ${shadowVariant(shadow)}`}>{children}</div>
	)
}

export default Shadow
