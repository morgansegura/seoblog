import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import Document, { Html, Head, Main, NextScript } from "next/document"

class SEOBlogDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					{/*<
					<meta charSet='UTF-8' />
					meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/> */}
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
						rel='stylesheet'></link>
					<link rel='stylesheet' href='/static/css/styles.css' />
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
