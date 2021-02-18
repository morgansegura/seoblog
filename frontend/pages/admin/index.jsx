import React from "react"
import Link from "next/link"
import { Layout } from "../../components/shared"
import { Admin } from "../../components/auth"

const AdminIndex = () => {
	return (
		<Layout>
			<Admin>Admin Page</Admin>
		</Layout>
	)
}

export default AdminIndex
