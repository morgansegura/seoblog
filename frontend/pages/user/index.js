import React from "react"
import { Container, Layout } from "../../components/shared"
import { Private } from "../../components/auth"

const UserIndex = () => {
	return (
		<Layout>
			<Private>
				<Container>
					<h2>User Dashboard</h2>
				</Container>
			</Private>
		</Layout>
	)
}

export default UserIndex
