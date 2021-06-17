import { useState } from 'react'
// Core Components
import Container from '@core/structure/Container'
import Drawer from '@core/navigation/Drawer'
// Layout Components
import Header from '@layouts/Header'
// Icons
import IconClose from '@core/icons/IconClose'
// Styles
import styles from './AdminDashboard.module.scss'

const AdminDashboard = ({ title }) => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<div>
			<Header open={handleToggleMenu} />
			<Container className={styles.container}>{title}</Container>
			<Drawer
				open={toggleMenu}
				close={() => setToggleMenu(false)}
				icon={<IconClose />}>
				<div className={styles.menu}>
					<div className={styles.menuTitle}>Tag</div>
					<div className={styles.menuItem}>Show Tags</div>
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
		</div>
	)
}

export default AdminDashboard
