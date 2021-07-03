// Layouts
import BaseLayout from '@layouts/BaseLayout'
// Core
import Container from '@core/structure/Container'
import Text from '@core/typography/Text'
import Box from '@core/surface/Box'

const Landing = ({ title }) => {
	return (
		<BaseLayout>
			<Container>
				<Text
					as="h1"
					size="800"
					style={{
						display: 'flex',
						marginTop: '3rem',
						marginBottom: '3rem',
					}}>
					Shadow Small
				</Text>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						marginTop: '3rem',
						marginBottom: '3rem',
					}}>
					<Box
						shadow="sm"
						as="section"
						p="60"
						mr="40"
						mb="40"
						fill="lime"
						radius="lg">
						<Text as="h1" size="400">
							Small
						</Text>
					</Box>
					<Box shadow="base" as="section" p="60" mr="40" mb="40">
						<Text as="h1" size="400">
							Default
						</Text>
					</Box>
					<Box shadow="md" as="section" p="60" mr="40" mb="40">
						<Text as="h1" size="400">
							Medium
						</Text>
					</Box>
					<Box shadow="lg" as="section" p="60" mr="40" mb="40">
						<Text as="h1" size="400">
							Large
						</Text>
					</Box>
					<Box shadow="xl" as="section" p="60" mr="40" mb="40">
						<Text as="h1" size="400">
							Extra Large
						</Text>
					</Box>
					<Box shadow="2xl" as="section" p="60" mr="40" mb="40">
						<Text as="h1" size="400">
							Extra Large 2x
						</Text>
					</Box>
					<Box shadow="3xl" as="section" p="60" mr="40" mb="40">
						<Text as="h1" size="400">
							Extra Large 3X
						</Text>
					</Box>
				</div>
			</Container>
			<Container fill="blue" maxWidth="md">
				<Text as="h1" size="400">
					Medium (768)
				</Text>
			</Container>
			<Container fill="cyan" maxWidth="lg">
				<Text as="h1" size="400">
					Large (992)
				</Text>
			</Container>
			<Container fill="magenta" maxWidth="xl">
				<Text as="h1" size="400">
					Extra Large (1200)
				</Text>
			</Container>
			<Container style={{ background: 'goldenrod' }} maxWidth="xl2">
				<Text as="h1" size="400">
					2X Large (1440)
				</Text>
			</Container>
			<Container style={{ background: 'lime' }} maxWidth="xl3">
				<Text as="h1" size="400">
					3X Large (2256)
				</Text>
			</Container>
			<Container style={{ background: 'yellow' }}>
				<Text as="h1" size="400">
					Small (576px)
				</Text>
			</Container>
			<Container style={{ background: 'black', color: 'white' }}>
				<Text as="h1" size="400">
					Medium (768)
				</Text>
			</Container>
			<Container style={{ background: 'cyan' }}>
				<Text as="h1" size="400">
					Large (992)
				</Text>
			</Container>
			<Container style={{ background: 'magenta' }}>
				<Text as="h1" size="400">
					Extra Large (1200)
				</Text>
			</Container>
			<Container style={{ background: 'goldenrod' }}>
				<Text as="h1" size="400">
					2X Large (1440)
				</Text>
			</Container>
			<Container style={{ background: 'lime' }}>
				<Text as="h1" size="400">
					3X Large (2256)
				</Text>
			</Container>
		</BaseLayout>
	)
}

export default Landing
