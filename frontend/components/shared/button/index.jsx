import React, { Fragment } from "react"
import Link from "next/link"

const Button = ({
	children,
	className,
	href,
	onClick,
	styles,
	type,
	...restProps
}) => (
	<Fragment>
		{href && (
			<Link href={href} {...restProps}>
				<a
					className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>
					{children}
				</a>
			</Link>
		)}
		{onClick && (
			<button
				{...restProps}
				onClick={onClick}
				className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>
				{children}
			</button>
		)}
		{type && (
			<button
				{...restProps}
				type={type}
				className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>
				{children}
			</button>
		)}
	</Fragment>
)

export default Button
