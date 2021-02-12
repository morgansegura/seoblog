import React from "react"
import Layout from "../../components/Layout"
import { Layout } from "../../components/shared"
import Admin from "../../components/auth/Admin"

const CategoryTag = () => {
	return (
		<Layout>
			<Admin>
				<div className='w-full max-w-6xl p-8 mx-auto'>
					<h2>Manage Categories and Tags</h2>
				</div>
			</Admin>
		</Layout>
	)
}

export default CategoryTag
