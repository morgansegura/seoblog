import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Header className='bg-gray-100' />
			{children}
			<div>footer</div>
		</React.Fragment>
	)
}

export default Layout
