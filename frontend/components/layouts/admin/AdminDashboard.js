import { useState } from 'react'
import Link from 'next/link'
// Core Components
// Core Components
import Text from '@core/typography/Text'
// Layout Components
import AdminLayout from '@layouts/admin/AdminLayout'
// Styles
import styles from './AdminDashboard.module.scss'

const AdminDashboard = ({ title, children, ...props }) => {
	return (
		<AdminLayout>
			Anything
			<Text as="h1" className={styles.title}>
				{title}
			</Text>
			Text
		</AdminLayout>
	)
}

export default AdminDashboard
