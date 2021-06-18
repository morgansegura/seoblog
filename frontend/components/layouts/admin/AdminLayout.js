import { useState } from 'react'
import Link from 'next/link'
// Core Components
import Container from '@core/structure/Container'
import Drawer from '@core/navigation/Drawer'
import Admin from '@auth/Admin'
// Layout Components
import Header from '@layouts/Header'
// Icons
import IconClose from '@core/icons/IconClose'
// Styles
import styles from './AdminLayout.module.scss'

const AdminLayout = ({ children, ...props }) => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}
	console.log(props)
	return (
		<Admin>
			<Header open={handleToggleMenu} />
			<Container className={styles.container}>{children}</Container>
			<Drawer
				open={toggleMenu}
				close={() => setToggleMenu(false)}
				icon={<IconClose />}>
				<div className={styles.menu}>
					<div className={styles.menuTitle}>Tag</div>
					<Link href="/admin/tags">
						<a className={styles.menuItem}>Show Tags</a>
					</Link>
					<div className={styles.menuItem}>Add Tag</div>
					<div className={styles.divider}></div>
					<div className={styles.menuTitle}>Category</div>
					<div className={styles.menuItem}>Show Categories</div>
					<div className={styles.menuItem}>Add Category</div>
					<div className={styles.divider}></div>
					<div className={styles.menuTitle}>Post</div>
					<div className={styles.menuItem}>Show Posts</div>
					<div className={styles.menuItem}>Add Post</div>
					<div className={styles.divider}></div>
				</div>
			</Drawer>
		</Admin>
	)
}

export default AdminLayout
