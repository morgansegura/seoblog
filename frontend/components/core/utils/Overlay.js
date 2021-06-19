import AnimateFadeToggle from '@core/utils/AnimateFadeToggle'
// Styles
import styles from './Overlay.module.scss'

const Overlay = ({ className: givenClassName, children, open, ...props }) => {
	return (
		<AnimateFadeToggle
			in={open}
			classes={{
				appear: styles.fadeLoad,
				appearActive: styles.fadeLoad,
				appearDone: styles.fadeLoad,
				enter: styles.fadeLoad,
				enterActive: styles.fadeIn,
				enterDone: styles.fadeIn,
				exit: styles.fadeOut,
				exitActive: styles.fadeOut,
				exitDone: styles.fadeOut,
			}}>
			<div className={styles.backdrop} {...props}>
				{children}
			</div>
		</AnimateFadeToggle>
	)
}

export default Overlay
