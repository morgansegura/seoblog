import { radius } from '@styled/spacing'

const radiusArr = ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', ,]

export const $radius = props => {
	if (props === true) {
		return `
			border-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-radius: ${radius[props]};
		`
	}
}

export const $radiusT = props => {
	if (props === true) {
		return `
			border-top-left-radius: ${radius['base']};
			border-top-right-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-top-left-radius: ${radius[props]};
			border-top-right-radius: ${radius[props]};
		`
	}
}

export const $radiusR = props => {
	if (props === true) {
		return `
			border-top-right-radius: ${radius['base']};
			border-bottom-right-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-top-right-radius: ${radius[props]};
			border-bottom-right-radius: ${radius[props]};
		`
	}
}

export const $radiusB = props => {
	if (props === true) {
		return `
			border-bottom-right-radius: ${radius['base']};
			border-bottom-left-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-bottom-right-radius: ${radius[props]};
			border-bottom-left-radius: ${radius[props]};
		`
	}
}

export const $radiusL = props => {
	if (props === true) {
		return `
			border-top-left-radius: ${radius['base']};
			border-bottom-left-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-top-left-radius: ${radius[props]};
			border-bottom-left-radius: ${radius[props]};
		`
	}
}
