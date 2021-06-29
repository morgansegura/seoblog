import Head from 'next/head'

// Styled Components Global
import { GlobalStyle } from '@styled/globalStyles'
// import '@styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
