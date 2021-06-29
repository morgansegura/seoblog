import { useState } from 'react'
import Link from 'next/link'
// Auth Components
import CategoryWidget from '@auth/widgets/CategoryWidget'
import TagWidget from '@auth/widgets/TagWidget'
import BlogWidget from '@auth/widgets/BlogWidget'
// Core Components
import Text from '@core/typography/Text'
import Pane from '@core/navigation/Pane'
// Icon Components
import IconClose from '@core/icons/IconClose'
// Layout Components
import AdminLayout from '@layouts/admin/AdminLayout'
import Container from '@core/structure/Container'
// Styles
import styles from './PostMeta.module.scss'

const PostMeta = ({ title, children, ...props }) => {
	const [open, setOpen] = useState(false)

	const handleTogglePane = () => {
		setOpen(!open)
	}

	return (
		<AdminLayout>
			<div className={styles.nav}>
				<Container className={styles.navInner}>
					<div className={styles.navItem} onClick={handleTogglePane}>
						Link to open slider
					</div>
				</Container>
			</div>
			<Container className={styles.slidingContent}>
				<Pane
					icon={<IconClose />}
					className={styles.slidingDrawer}
					open={open}
					close={() => setOpen(false)}
					over={false}
					drawer={'Hello'}>
					<Text as="h1" className={styles.title}>
						{title}
					</Text>

					<BlogWidget />
					<br />
					<br />
					<br />
					<CategoryWidget />
					<br />
					<br />
					<br />
					<TagWidget />
				</Pane>
			</Container>
		</AdminLayout>
	)
}

export default PostMeta
