// Layouts
import BaseLayout from '@layouts/BaseLayout'
// Core
import Container from '@core/structure/Container'
import Button from '@core/interaction/Button'
import Text from '@core/typography/Text'

// Styled
import * as s from './Landing.styled'
import * as color from '@styled/colors'

const Landing = ({ title }) => {
	return (
		<BaseLayout>
			<Container style={{ padding: '1rem' }}>
				<Text as="p" size="400">
					ello
				</Text>
				<Button
					style={{
						marginTop: '1rem',
						marginLeft: '1rem',
						marginBottom: '1rem',
					}}
					className="Yippie"
					as="button"
					sm
					secondary
					outline
					shadow={1}>
					{title}
				</Button>
				<Button
					style={{
						marginTop: '1rem',
						marginLeft: '1rem',
						marginBottom: '1rem',
					}}
					className="Yippie"
					as="button"
					sm
					primary
					radius={4}
					// outline
					shadow={4}>
					{title}
				</Button>
				<Button
					style={{
						marginTop: '1rem',
						marginLeft: '1rem',
						marginBottom: '1rem',
					}}
					className="Yippie"
					as="button"
					sm
					shadow={3}>
					{title}
				</Button>
				<Button
					style={{
						marginTop: '1rem',
						marginLeft: '1rem',
						marginBottom: '1rem',
					}}
					className="Yippie"
					as="button"
					sm
					shadow={4}>
					{title}
				</Button>
				<Button
					style={{
						marginTop: '1rem',
						marginLeft: '1rem',
						marginBottom: '1rem',
					}}
					className="Yippie"
					as="button"
					sm
					shadow={5}>
					{title}
				</Button>
				<Button
					style={{
						marginTop: '1rem',
						marginLeft: '1rem',
						marginBottom: '1rem',
					}}
					className="Yippie"
					as="button"
					sm
					shadow={6}>
					{title}
				</Button>

				<s.Grid>
					<s.Column className="primary">
						{Object.entries(color.primary).map(([key]) => {
							return (
								<div key={key} className={`primary-${key}`}>
									{`primary ${key}`}
								</div>
							)
						})}
					</s.Column>
					<s.Column className="secondary">
						{Object.entries(color.secondary).map(([key]) => {
							return (
								<div key={key} className={`secondary-${key}`}>
									{`secondary ${key}`}
								</div>
							)
						})}
					</s.Column>
					<s.Column className="warning">
						{Object.entries(color.warning).map(([key]) => {
							return (
								<div key={key} className={`warning-${key}`}>
									{`warning ${key}`}
								</div>
							)
						})}
					</s.Column>
					<s.Column className="danger">
						{Object.entries(color.danger).map(([key]) => {
							return (
								<div key={key} className={`danger-${key}`}>
									{`danger ${key}`}
								</div>
							)
						})}
					</s.Column>
					<s.Column className="success">
						{Object.entries(color.success).map(([key]) => {
							return (
								<div key={key} className={`success-${key}`}>
									{`success ${key}`}
								</div>
							)
						})}
					</s.Column>
				</s.Grid>
				<s.Grid>
					<s.Column className="grey">
						{Object.entries(color.grey).map(([key]) => {
							return (
								<div key={key} className={`grey-${key}`}>
									{`grey ${key}`}
								</div>
							)
						})}
					</s.Column>
					<s.Column className="parchment">
						{Object.entries(color.parchment).map(([key]) => {
							return (
								<div key={key} className={`parchment-${key}`}>
									{`parchment ${key}`}
								</div>
							)
						})}
					</s.Column>
					<s.Column className="clay">
						{Object.entries(color.clay).map(([key]) => {
							return (
								<div key={key} className={`clay-${key}`}>
									{`clay ${key}`}
								</div>
							)
						})}
					</s.Column>
				</s.Grid>
			</Container>
		</BaseLayout>
	)
}

export default Landing
