import React from 'react'
import { Container, Layout } from '../../components/shared'
import { Admin } from '../../components/auth'

const AdminIndex = () => {
	return (
		<Layout>
			<Admin>
				<Container>
					<h2 className="mb-3 text-xl font-semibold text-center sm:text-left">
						Admin Page
					</h2>
				</Container>
			</Admin>
		</Layout>
	)
}

export default AdminIndex
