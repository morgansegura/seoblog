import styles from './Overlay.module.scss'

const Overlay = ({ className: givenClassName, children, open, ...props }) => {
	return (
		<div
			className={`${styles.backdrop} ${open && styles.active}`}
			{...props}>
			{children}
		</div>
	)
}

export default Overlay
