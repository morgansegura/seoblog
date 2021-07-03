import { boxshadow } from '@styled/spacing'

const shadowArr = [
	'sm',
	'base',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'inner',
	'none',
]

export const $shadow = props => {
	if (props === true) {
		return `
			box-shadow: ${boxshadow['base']};
		`
	} else if (shadowArr.includes(props)) {
		return `
			box-shadow: ${boxshadow[props]};
		`
	}
}
