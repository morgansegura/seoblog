import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import { ActiveLink, Container, Tabs } from '../../../components/shared'
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
			<Tabs title="Admin Dashboard" tabData={tabData}>
				{children}
			</Tabs>
		</Container>
	)
}

export default Admin
