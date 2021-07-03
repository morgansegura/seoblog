import { borderwidth } from '@styled/spacing'

const borderArr = ['0', '2', '4', '8', 'base']

export const $border = props => {
	if (props === true) {
		return `
			border: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border: ${borderwidth[props]} solid;
		`
	}
}

export const $borderT = props => {
	if (props === true) {
		return `
			border-top: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-top: ${borderwidth[props]} solid;
		`
	}
}

export const $borderR = props => {
	if (props === true) {
		return `
			border-right: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-right: ${borderwidth[props]} solid;
		`
	}
}

export const $borderB = props => {
	if (props === true) {
		return `
			border-bottom: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-bottom: ${borderwidth[props]} solid;
		`
	}
}

export const $borderL = props => {
	if (props === true) {
		return `
			border-left: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-left: ${borderwidth[props]} solid;
		`
	}
}
