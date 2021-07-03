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

export const $p = props => {
	if (props === true) {
		return `
			padding: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding: ${sp[props]};
		`
	}
}

export const $px = props => {
	if (props === true) {
		return `
			padding-right: ${sp[40]};
			padding-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-right: ${sp[props]};
			padding-left: ${sp[props]};
		`
	}
}

export const $py = props => {
	if (props === true) {
		return `
			padding-top: ${sp[40]};
			padding-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-top: ${sp[props]};
			padding-bottom: ${sp[props]};
		`
	}
}

export const $pt = props => {
	if (props === true) {
		return `
			padding-top: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-top: ${sp[props]};
		`
	}
}

export const $pr = props => {
	if (props === true) {
		return `
			padding-right: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-right: ${sp[props]};
		`
	}
}

export const $pb = props => {
	if (props === true) {
		return `
			padding-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-bottom: ${sp[props]};
		`
	}
}

export const $pl = props => {
	if (props === true) {
		return `
			padding-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-left: ${sp[props]};
		`
	}
}
