import { useState } from 'react'
import Link from 'next/link'
// Auth Components
import Category from '@auth/widgets/Category'
import Tags from '@auth/widgets/Tags'
// Core Components
import Text from '@core/typography/Text'
// Layout Components
import AdminLayout from '@layouts/admin/AdminLayout'
// Styles
import styles from './PostMeta.module.scss'

const PostMeta = ({ title, children, ...props }) => {
	return (
		<AdminLayout>
			<Text as="h1" className={styles.title}>
				{title}
			</Text>
			<Category />
			<Tags />
		</AdminLayout>
	)
}

export default PostMeta
