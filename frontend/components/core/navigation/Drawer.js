import { useState, useRef } from 'react'
import { useClickAway } from 'react-use'
// Core Components
import Overlay from '@core/utils/Overlay'
import Ripple from '@core/utils/Ripple'
import AnimateSlideToggle from '@core/utils/AnimateSlideToggle'
// Icons
import IconClose from '@core/icons/IconClose'
// Styles
import styles from './Drawer.module.scss'

const Drawer = ({
	children,
	className: givenClassName,
	close,
	icon,
	open,
	shadow,
	toggle,
	location,
	...props
}) => {
	let classes = givenClassName
		? `${styles.drawer} ${givenClassName}`
		: styles.drawer

	if (location === 'top') {
		classes = classes + ' ' + styles.top
	}
	if (location === undefined || location === 'right') {
		classes = classes + ' ' + styles.right
	}
	if (location === 'bottom') {
		classes = classes + ' ' + styles.bottom
	}
	if (location === 'left') {
		classes = classes + ' ' + styles.letft
	}

	console.log(location)

	const contentRef = useRef(null)

	useClickAway(contentRef, () => {
		close()
	})

	return (
		<>
			<AnimateSlideToggle
				in={open}
				classes={{
					enterDone: styles.slideIn,
					exit: styles.slideOut,
				}}>
				<div ref={contentRef} className={classes} {...props}>
					{icon && (
						<div className={styles.close} onClick={close}>
							{icon ? icon : <IconClose />}
							<Ripple duration="500" color="#cdcdcd" />
						</div>
					)}
					{children}
				</div>
			</AnimateSlideToggle>

			{shadow !== false && <Overlay open={open} />}
		</>
	)
}

export default Drawer
