import styled from 'styled-components'
import media from 'styled-media-query'
import { sp, widthMax, widthMin, gutter } from '@styled/spacing'
import { lighten, rgba, readableColor } from 'polished'
import { white, black } from '@styled/colors'

export const Container = styled(props => props.as)`
	${({ maxWidth }) => {
		if (maxWidth) {
			return `max-width: ${widthMin[`${maxWidth}`]};`
		} else {
			return `
                @media(min-width: ${widthMin['sm']}) {
                    max-width: ${widthMax['xs']};
                }
                @media(min-width: ${widthMin['md']}) {
                    max-width: ${widthMax['sm']};
                }
                @media(min-width: ${widthMin['lg']}) {
                    max-width: ${widthMax['md']};
                }
                @media(min-width: ${widthMin['xl']}) {
                    max-width: ${widthMax['lg']};
                }
                @media(min-width: ${widthMin['xxl']}) {
                    max-width: ${widthMax['xl']};
                }
                @media(min-width: ${widthMin['xxxl']}) {
                    max-width: ${widthMax['xxl']};
                }
            `
		}
	}}

	${({ gutters }) => {
		if (gutters === true) {
			return `
                padding-left: ${gutter['md']};
                padding-right: ${gutter['md']};
            `
		} else if (['sm', 'md', 'lg', 'xl'].includes(gutters)) {
			return `
                padding-left: ${gutter[gutters]};
                padding-right: ${gutter[gutters]};
            `
		}
	}}


	${({ auto }) => {
		if (auto) {
			return `
                margin-left: auto;
                margin-right: auto;
            `
		}
	}}

	${({ fill }) => {
		if (fill) {
			return `
                color: ${readableColor(fill, white, black, true)};
                background-color: ${fill};

                div span {
                    background-color: ${rgba(readableColor(fill), 0.75)};
                }

                &:hover {
                    color: ${lighten(
						0.2,
						readableColor(fill, white, black, true)
					)};
                    background-color: ${lighten(0.1, fill)};
                }
            `
		} else {
			return false
		}
	}}
`
