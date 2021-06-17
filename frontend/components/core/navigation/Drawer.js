import { useRef, useState, useEffect } from 'react'
import { useClickAway } from 'react-use'
// Core Components
import Overlay from '@core/utils/Overlay'
// Icons
import IconClose from '@core/icons/IconClose'

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
	const [isOpen, setIsOpen] = useState(false)

	const classes = givenClassName
		? `${styles.drawer} ${givenClassName}`
		: styles.drawer

	const contentRef = useRef(null)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	useClickAway(contentRef, () => {
		close()
	})

	return (
		<>
			<div
				ref={contentRef}
				className={`${classes} ${open && styles.active}`}
				{...props}>
				{icon && (
					<div className={styles.close} onClick={close}>
						{icon ? icon : <IconClose />}
					</div>
				)}
				{children}
			</div>
			<Overlay open={open} />
		</>
	)
}

export default Drawer
