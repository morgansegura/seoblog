import { useState } from 'react'
// Styles
import styles from './TextField.module.scss'

const TextField = ({ className: givenClassName, label, value, ...props }) => {
	const classes = givenClassName
		? `${styles.formGroup} ${givenClassName}`
		: styles.formGroup

	const [focused, setFocused] = useState(false)
	const hasValue = focused || value.length ? true : false

	const handleFocused = () => {
		setFocused(!focused)
	}

	return (
		<div className={`${classes} ${hasValue && styles.focused}`}>
			<div className={styles.label}>{label}</div>
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
