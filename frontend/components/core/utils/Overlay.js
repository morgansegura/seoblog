import AnimateFadeToggle from '@core/utils/AnimateFadeToggle'
// Styles
import styles from './Overlay.module.scss'

const Overlay = ({ className: givenClassName, children, open, ...props }) => {
	return (
		<AnimateFadeToggle
			in={open}
			classes={{
				enterDone: styles.fadeIn,
				exit: styles.fadeOut,
			}}>
			<div className={styles.backdrop} {...props}>
				{children}
			</div>
		</AnimateFadeToggle>
	)
}

export default Overlay
