// import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
// Layout Components
import Header from '@layouts/Header'
// Styles
import styles from './BaseLayout.module.scss'

const BaseLayout = ({ children, ...props }) => {
	return (
		<div {...props}>
			<Header />
			<main className={styles.container}>{children}</main>
		</div>
	)
}

export default BaseLayout
