import BaseLayout from '@layouts/BaseLayout'
import Container from '@core/structure/Container'

import styles from './Signup.module.scss'

const Signup = () => {
	return (
		<BaseLayout>
			<Container className={styles.container}>Signup</Container>
		</BaseLayout>
	)
}

export default Signup
