import BaseLayout from '@layouts/BaseLayout'
import Container from '@core/structure/Container'

import styles from './Landing.module.scss'

const Landing = ({ title }) => {
	return (
		<BaseLayout>
			<Container className={styles.container}>{title}</Container>
		</BaseLayout>
	)
}

export default Landing
