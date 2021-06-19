import { CSSTransition } from 'react-transition-group'

const AnimateFadeToggle = ({
	in: inProp,
	children,
	timeout = { appear: 0, enter: 0, exit: 300 },
	classes,
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

export default AnimateFadeToggle
