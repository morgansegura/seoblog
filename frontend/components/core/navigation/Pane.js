import { useRef } from 'react'
import { useClickAway } from 'react-use'
// Core Components
import AnimateSlideToggle from '@core/utils/AnimateSlideToggle'
// Icons
import IconClose from '@core/icons/IconClose'
// Styles
import styles from './Pane.module.scss'

const Pane = ({
	children,
	className: givenClassName,
	drawer,
	close,
	icon,
	open,
	overlay,
	toggle,
	...props
}) => {
	const classes = givenClassName
		? `${styles.container} ${givenClassName}`
		: styles.container

	const contentRef = useRef(null)

	useClickAway(contentRef, () => {
		close()
	})

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.content}>{children}</div>
				<div className={styles.aside}>
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
							{drawer}
						</div>
					</AnimateSlideToggle>
				</div>
			</div>
		</div>
	)
}

// export const Content = ({ children }) => {
// 	return <div className={styles.slidingContent}>{children}</div>
// }

export default Pane
