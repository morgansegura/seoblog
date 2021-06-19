import { CSSTransition } from 'react-transition-group'

const AnimateSlideToggle = ({
	in: inProp,
	children,
	classes,
	timeout = { appear: 0, enter: 0, exit: 300 },
}) => {
	return (
		<CSSTransition
			unmountOnExit
			in={inProp}
			classNames={classes}
			timeout={timeout}
			appear>
			{children}
		</CSSTransition>
	)
}

export default AnimateSlideToggle
