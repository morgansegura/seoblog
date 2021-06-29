import { useEffect } from 'react'
// Base Components
import AnimateFadeToggle from '@core/utils/AnimateFadeToggle'
// Styles
import styles from './Toast.module.scss'

const Prompt = ({
	className: givenClassName,
	children,
	open,
	close,
	...props
}) => {
	let classes = givenClassName
		? `${styles.container} ${givenClassName}`
		: styles.container

	if (props.error) {
		classes = classes + ' ' + styles.error
	}

	if (props.success) {
		classes = classes + ' ' + styles.success
	}

	useEffect(() => {
		setTimeout(() => {
			close()
		}, 3000)
	}, [])

	return (
		<AnimateFadeToggle
			in={open}
			classes={{
				enterDone: styles.fadeIn,
				exit: styles.fadeOut,
			}}>
			<div className={classes}>{children}</div>
		</AnimateFadeToggle>
	)
}

export default Prompt
