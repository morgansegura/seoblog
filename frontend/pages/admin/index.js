import React from "react"
import Link from "next/link"
import { Layout } from "../../components/shared"
import { Admin } from "../../components/auth"

const AdminIndex = () => {
	return (
		<Layout>
			<Admin>
				<div className='w-full max-w-6xl p-8 mx-auto'>
					<h2 className='text-xl font-semibold'>Admin Page</h2>
					<div className='grid grid-cols-2 gap-4 mt-8'>
						<div className='w-2/5 col-span-1'>
							<div className='text-sm border border-gray-200 rounded'>
								<div className='p-4 border-b border-gray-200'>
									<Link href='/'>
										<a>Categories and Tags</a>
									</Link>
								</div>
								<div className='p-4 border-b border-gray-200'>
									<Link href='/'>
										<a>Categories and Tags</a>
									</Link>
								</div>
								<div className='p-4 border-b border-gray-200'>
									<Link href='/'>
										<a>Categories and Tags</a>
									</Link>
								</div>
								<div className='p-4'>
									<Link href='/'>
										<a>Categories and Tags</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='w-3/5 cols-span-1'></div>
					</div>
				</div>
			</Admin>
		</Layout>
	)
}

export default AdminIndex
