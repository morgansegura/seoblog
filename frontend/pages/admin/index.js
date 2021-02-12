import React from 'react'
import Layout from '../../components/Layout'
import Admin from '../../components/auth/Admin'

const AdminIndex = () => {
	return (
		<Layout>
			<Admin>
				<div className='w-full max-w-6xl mx-auto p-8'>
					<h2>Admin Page</h2>
				</div>
			</Admin>
		</Layout>
	)
}

export default AdminIndex
