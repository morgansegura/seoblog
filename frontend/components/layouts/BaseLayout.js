// import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
// Layout Components
import Header from '@layouts/Header'
// Styles
import s from './BaseLayout.styled'

const BaseLayout = ({ children, ...props }) => {
	return (
		<div {...props}>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default BaseLayout
