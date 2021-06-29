import { useState } from 'react'
import Link from 'next/link'
// Auth Components
import CategoryWidget from '@auth/widgets/CategoryWidget'
import TagWidget from '@auth/widgets/TagWidget'
import BlogWidget from '@auth/widgets/BlogWidget'
// Core Components
import Text from '@core/typography/Text'
import Drawer from '@core/navigation/Drawer'
// Icon Components
import IconClose from '@core/icons/IconClose'
// Layout Components
import AdminLayout from '@layouts/admin/AdminLayout'
import Container from '@core/structure/Container'
// Styles
import styles from './AdminPost.module.scss'

const AdminPost = ({ title, children, ...props }) => {
	const [openTags, setOpenTags] = useState(false)
	const [openCategories, setOpenCategories] = useState(false)
	const [open, setOpen] = useState(false)

	return (
		<>
			<AdminLayout>
				<Container className={styles.nav}>
					<div className={styles.navContainer}>
						<div
							className={styles.navItem}
							onClick={() => setOpenTags(true)}>
							New Tag
						</div>

						<div
							className={styles.navItem}
							onClick={() => setOpenTags(true)}>
							New Category
						</div>
					</div>
				</Container>
				<Container className={styles.content}>
					<Text as="h1" className={styles.title}>
						{title}
					</Text>

					<BlogWidget />
					<br />
					<br />
					<br />

					<br />
					<br />
					<br />
				</Container>
			</AdminLayout>
			<Drawer
				open={openTags}
				location="bottom"
				shadow={false}
				icon={<IconClose />}
				close={() => setOpenTags(false)}
				className={styles.drawer}>
				<Text as="h4">Create a new Global Tag</Text>
				<TagWidget />
			</Drawer>
			<Drawer
				open={openCategories}
				location="bottom"
				shadow={false}
				icon={<IconClose />}
				close={() => setOpenCategories(false)}
				className={styles.drawer}>
				<CategoryWidget />
			</Drawer>
		</>
	)
}

export default AdminPost
