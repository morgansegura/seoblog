import React, { useEffect } from 'react'
import Router from 'next/router'
import { Container, Tabs } from '../../../components/shared'
import { isAuth } from '../../../actions/auth'

const Admin = ({ children }) => {
	useEffect(() => {
		if (!isAuth()) {
			Router.push(`/signin`)
		} else if (isAuth().role !== 1) {
			Router.push(`/`)
		}
	})

	const tabData = [
		{
			id: 0,
			path: '/admin',
			title: 'Dashboard',
		},
		{
			id: 1,
			path: '/admin/crud/category-tag',
			title: 'Categories & Tags',
		},
		{
			id: 2,
			path: '/admin/crud/',
			title: 'Blog Posts',
		},
	]
	return (
		<Container>
			<Tabs tabData={tabData}>{children}</Tabs>
		</Container>
	)
}

export default Admin
