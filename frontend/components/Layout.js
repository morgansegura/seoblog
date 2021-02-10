import React from 'react'
import Header from './Header'

const Layout = ({
	children,
	layoutClasses,
	headerClasses,
	footerClasses,
	bodyClasses,
}) => {
	return (
		<div className={`flex flex-col h-screen ${layoutClasses}`}>
			<Header className={`bg-gray-100 ${headerClasses}`} />
			<main className={`flex-1 ${bodyClasses}`}>{children}</main>
			<footer
				className={`bg-gray-800 text-gray-100 py-4 text-center ${footerClasses}`}>
				footer
			</footer>
		</div>
	)
}

export default Layout
