import AdminDashboard from '@components/layouts/admin/AdminDashboard'
import Admin from '@auth/Admin'

const AdminIndex = () => {
	return (
		<Admin>
			<AdminDashboard title="Admin Dashboard" />
		</Admin>
	)
}
export default AdminIndex
