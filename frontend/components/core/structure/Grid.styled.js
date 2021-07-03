import styled from 'styled-components'
import media from 'styled-media-query'
import { sp, widthMax, widthMin, gutter } from '@styled/spacing'

export const Grid = styled(props => props.as)`
	${({ min, max }) => {
		if (min) {
			return `
            display: grid;
            grid-template-columns: 3
            `
		}
	}}
`
