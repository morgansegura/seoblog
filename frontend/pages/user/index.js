import Landing from '@layouts/Landing'
import Private from '@auth/Private'

const UserIndex = () => {
	return (
		<Private>
			<Landing title="User Dashboard" />
		</Private>
	)
}
export default UserIndex
