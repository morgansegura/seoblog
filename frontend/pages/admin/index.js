import Landing from '@layouts/Landing'
import Admin from '@auth/Admin'

const AdminIndex = () => {
	return (
		<Admin>
			<Landing title="Admin Dashboard" />
		</Admin>
	)
}
export default AdminIndex
