import React from 'react'
import Layout from '../../components/Layout'
import Private from '../../components/Private'

const UserIndex = () => {
	return (
		<Layout>
			<Private>
				<div className='w-full max-w-6xl mx-auto p-8'>
					<h2>User Dashboard</h2>
				</div>
			</Private>
		</Layout>
	)
}

export default UserIndex
