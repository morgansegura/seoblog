import { white, black } from '@styled/colors'
import { lighten, rgba, readableColor } from 'polished'

export const $fill = props => {
	if (props) {
		return `
            color: ${readableColor(props, white, black, true)};
            background-color: ${props};

            div span {
                background-color: ${rgba(readableColor(props), 0.75)};
            }

            &:hover {
                color: ${lighten(
					0.2,
					readableColor(props, white, black, true)
				)};
                background-color: ${lighten(0.1, props)};
            }
        `
	}
}

export const $borderfill = props => {
	if (props) {
		return `
            border-color: ${props};
        `
	}
}
