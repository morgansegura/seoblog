import React from "react"
import Link from "next/link"
import { Container, Layout } from "../../components/shared"
import { Admin } from "../../components/auth"

const AdminIndex = () => {
	return (
		<Layout>
			<Admin>
				<Container>
					<h2 className='text-xl font-semibold'>Admin Page</h2>
					<div className='grid grid-cols-2 gap-4 mt-8'>
						<div className='w-2/5 col-span-1'>
							<div className='text-sm border border-gray-200 rounded'>
								<Link href='/admin/crud/category-tag'>
									<a className='block p-4 border-b border-gray-200'>
										Create Category
									</a>
								</Link>

								<Link href='/'>
									<a className='block p-4 border-b border-gray-200'>
										Categories and Tags
									</a>
								</Link>

								<Link href='/'>
									<a className='block p-4 border-b border-gray-200'>
										Categories and Tags
									</a>
								</Link>

								<Link href='/'>
									<a className='block p-4'>
										Categories and Tags
									</a>
								</Link>
							</div>
						</div>
						<div className='w-3/5 cols-span-1'></div>
					</div>
				</Container>
			</Admin>
		</Layout>
	)
}

export default AdminIndex
