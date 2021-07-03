import { sp } from '@styled/spacing'

const spaceArr = [
	'0',
	'5',
	'10',
	'15',
	'20',
	'25',
	'30',
	'35',
	'40',
	'50',
	'60',
	'70',
	'80',
	'90',
	'100',
	'110',
	'120',
	'140',
	'160',
	'200',
	'240',
	'280',
	'320',
	'360',
	'400',
	'440',
	'480',
	'520',
	'560',
	'600',
	'640',
	'720',
	'800',
	'960',
]

export const $m = props => {
	if (props === true) {
		return `
			margin: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin: ${sp[props]};
		`
	}
}

export const $mx = props => {
	if (props === true) {
		return `
			margin-right: ${sp[40]};
			margin-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-right: ${sp[props]};
			margin-left: ${sp[props]};
		`
	}
}

export const $my = props => {
	if (props === true) {
		return `
			margin-top: ${sp[40]};
			margin-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-top: ${sp[props]};
			margin-bottom: ${sp[props]};
		`
	}
}

export const $mt = props => {
	if (props === true) {
		return `
			margin-top: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-top: ${sp[props]};
		`
	}
}

export const $mr = props => {
	if (props === true) {
		return `
			margin-right: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-right: ${sp[props]};
		`
	}
}

export const $mb = props => {
	if (props === true) {
		return `
			margin-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-bottom: ${sp[props]};
		`
	}
}

export const $ml = props => {
	if (props === true) {
		return `
			margin-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-left: ${sp[props]};
		`
	}
}
