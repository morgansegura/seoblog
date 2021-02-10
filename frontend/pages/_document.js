import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class SEOBlogDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='UTF-8' />
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default SEOBlogDocument