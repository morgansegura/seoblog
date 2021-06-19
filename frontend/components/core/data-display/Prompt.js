import { useState } from 'react'
// Base Components
import AnimateFadeToggle from '@core/utils/AnimateFadeToggle'
// Styles
import styles from './Tooltip.module.scss'

const Prompt = ({
	className: givenClassName,
	children,
	open,
	confirm,
	cancel,
	...props
}) => {
	const classes = givenClassName
		? `${styles.container} ${givenClassName}`
		: styles.container

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
