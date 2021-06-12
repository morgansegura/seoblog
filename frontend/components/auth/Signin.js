import BaseLayout from '@layouts/BaseLayout'
import Container from '@core/structure/Container'

import styles from './Signin.module.scss'

const Signin = () => {
	return (
		<BaseLayout>
			<Container className={styles.container}>Signin</Container>
		</BaseLayout>
	)
}

export default Signin
