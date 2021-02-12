import React from "react"

const Container = ({
	children,
	className,
	size = "2xl",
	styles,
	...restProps
}) => {
	return (
		<div
			className={`w-full p-8 mx-auto max-w-screen-${size} ${className}`}
			styles={styles}
			{...restProps}>
			{children}
		</div>
	)
}

export default Container
