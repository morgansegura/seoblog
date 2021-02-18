import React from "react"
import { Container, Layout } from "../../../components/shared"
import { Admin } from "../../../components/auth"
import { Category } from "../../../components/crud"

const CategoryTag = () => {
	return (
		<Layout>
			<Admin>
				<Container>
					<h2 className='mb-3 text-xl font-semibold text-center sm:text-left'>
						Manage Categories & Tags
					</h2>
					<div className=''>
						<Category />
					</div>
				</Container>
			</Admin>
		</Layout>
	)
}

export default CategoryTag
