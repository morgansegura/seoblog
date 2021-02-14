import React from 'react'
import { Container, Layout } from '../../../components/shared'
import { Admin } from '../../../components/auth'
import { Category, Tag } from '../../../components/crud'

const CategoryTag = () => {
	return (
		<Layout>
			<Admin>
				<Container>
					<h2 className="mb-8 text-xl font-semibold text-center sm:text-left">
						Manage Categories & Tags
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="mb-8 lg:mr-8">
							<h3 className="mb-4 text-sm">Create a Category</h3>
							<Category />
						</div>
						<div className="mb-8 lg:ml-8">
							<h3 className="mb-4 text-sm">Create a Tag</h3>
							<Tag />
						</div>
					</div>
				</Container>
			</Admin>
		</Layout>
	)
}

export default CategoryTag
