import { useState, useRef } from 'react'
import { useClickAway } from 'react-use'
// Core Components
import Overlay from '@core/utils/Overlay'
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
	overlay,
	toggle,
	...props
}) => {
	const classes = givenClassName
		? `${styles.drawer} ${givenClassName}`
		: styles.drawer

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
						</div>
					)}
					{children}
				</div>
			</AnimateSlideToggle>

			<Overlay open={open} />
		</>
	)
}

export default Drawer
