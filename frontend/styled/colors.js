import { lighten, darken, complement } from 'polished'

export const black = `#171717`
export const white = `#fff`

const primaryBase = `#039be5`
export const primary = {
	200: lighten(0.2, primaryBase),
	400: primaryBase,
	600: darken(0.175, primaryBase),
}

const secondaryBase = `#d81b60`
export const secondary = {
	200: lighten(0.2, secondaryBase),
	400: secondaryBase,
	600: darken(0.175, secondaryBase),
}

export const grey = {
	50: `#fafafa`,
	100: `#f5f5f5`,
	200: `#eeeeee`,
	300: `#e0e0e0`,
	400: `#bdbdbd`,
	500: `#9e9e9e`,
	600: `#757575`,
	700: `#616161`,
	800: `#424242`,
	900: `#212121`,
}

export const parchment = {
	400: `#fcfbfa`,
	450: `#fcfbf9`,
	500: `#f7f4ef`,
	600: `#f1ede6`,
}

export const clay = {
	400: `#e8e7e5`,
	500: `#e0ded9`,
	600: `#d2cfc8`,
}

const warningBase = `#ffca33`
export const warning = {
	200: lighten(0.2, warningBase),
	400: warningBase,
	600: darken(0.15, warningBase),
}

const dangerBase = `#ff5252`
export const danger = {
	200: lighten(0.225, dangerBase),
	400: dangerBase,
	600: darken(0.2, dangerBase),
}

const successBase = `#10d165`
export const success = {
	200: lighten(0.4, successBase),
	400: successBase,
	600: darken(0.075, successBase),
}
