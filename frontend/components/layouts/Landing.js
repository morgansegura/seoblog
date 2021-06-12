import BaseLayout from '@layouts/BaseLayout'
import Container from '@core/structure/Container'

import styles from './Landing.module.scss'

const Landing = () => {
	return (
		<BaseLayout>
			<Container className={styles.container}>Landing</Container>
		</BaseLayout>
	)
}

export default Landing
