import React from "react"
import { Layout } from "../../components"
import { Private } from "../../components/auth"

const UserIndex = () => {
	return (
		<Layout>
			<Private>
				<div className='w-full max-w-6xl p-8 mx-auto'>
					<h2>User Dashboard</h2>
				</div>
			</Private>
		</Layout>
	)
}

export default UserIndex
