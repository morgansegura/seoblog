import { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
			<TransitionGroup component={null}>
				{showTooltip && (
					<CSSTransition classNames="tooltip" timeout={300}>
						<div className={classes}>{text}</div>
					</CSSTransition>
				)}
			</TransitionGroup>
			{children}
		</div>
	)
}

export default ToolTip
