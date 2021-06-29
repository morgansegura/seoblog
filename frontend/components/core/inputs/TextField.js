import { useState } from 'react'
// Styles
import styles from './TextField.module.scss'

const TextField = ({
	className: givenClassName,
	label,
	value,
	maxLength,
	minLength,
	...props
}) => {
	let classes = givenClassName
		? `${styles.formGroup} ${givenClassName}`
		: styles.formGroup

	const [minimum, setMinimum] = useState(Number(minLength))
	const [maximum, setMaximum] = useState(Number(maxLength))
	const [focused, setFocused] = useState(false)
	const hasValue = focused || value.length ? true : false

	if (value.length < minimum) {
		classes = classes + ' ' + styles.error
	}

	const handleFocused = () => {
		setFocused(!focused)
	}

	const displayCount = () => {}

	const handleChange = () => {}

	return (
		<div
			onChange={handleChange}
			className={`${classes} ${hasValue && styles.focused}`}>
			<div className={styles.label}>{label}</div>
			<div className={styles.message}>{displayCount()}</div>
			<input
				className={styles.formControl}
				value={value}
				onFocus={handleFocused}
				onBlur={handleFocused}
				{...props}
			/>
		</div>
	)
}

export default TextField
