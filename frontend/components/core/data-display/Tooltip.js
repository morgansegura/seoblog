import { useState } from 'react'
// Base Components
import AnimateFadeToggle from '@core/utils/AnimateFadeToggle'
// Styles
import styles from './Tooltip.module.scss'

const ToolTip = ({ className: givenClassName, children, text, ...props }) => {
	const classes = givenClassName
		? `${styles.tooltipContainer} ${givenClassName}`
		: styles.tooltipContainer

	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<div
			className={styles.tooltipWrapper}
			{...props}
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}>
			<AnimateFadeToggle
				in={showTooltip}
				classes={{
					enterDone: styles.fadeIn,
					exit: styles.fadeOut,
				}}>
				<div className={classes}>{text}</div>
			</AnimateFadeToggle>
			{children}
		</div>
	)
}

export default ToolTip
