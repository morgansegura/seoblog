import styled from 'styled-components'
import * as font from '@styled/fonts'

export const Tag = styled(props => props.as)`
	${({ size }) => {
		if (size) {
			return font[`f${size}`]
		}
	}}
`
