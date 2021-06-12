import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({
	children,
	className: givenClass,
	as: Tag = 'div',
	...props
}) => {
	const classes = givenClass
		? `${styles.button} ${givenClass}`
		: styles.button
	return (
		<>
			{props.href ? (
				<Link href={props.href}>
					<a className={classes} {...props}>
						{children}
					</a>
				</Link>
			) : (
				<Tag className={classes} {...props}>
					{children}
				</Tag>
			)}
		</>
	)
}

export default Button
