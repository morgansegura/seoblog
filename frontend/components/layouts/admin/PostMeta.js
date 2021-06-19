import { useState } from 'react'
import Link from 'next/link'
// Auth Components
import CategoryWidget from '@auth/widgets/CategoryWidget'
import TagWidget from '@auth/widgets/TagWidget'
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
			<CategoryWidget />
			<br />
			<br />
			<br />
			<TagWidget />
		</AdminLayout>
	)
}

export default PostMeta
