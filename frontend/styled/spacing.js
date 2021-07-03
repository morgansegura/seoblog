import { generateMedia } from 'styled-media-query'
import { css } from 'styled-components'

export const sp = {
	0: `0`,
	5: `${2 / 16}rem`,
	10: `${4 / 16}rem`,
	15: `${6 / 16}rem`,
	20: `${8 / 16}rem`,
	25: `${10 / 16}rem`,
	30: `${12 / 16}rem`,
	35: `${14 / 16}rem`,
	40: `${16 / 16}rem`,
	50: `${20 / 16}rem`,
	60: `${24 / 16}rem`,
	70: `${28 / 16}rem`,
	80: `${32 / 16}rem`,
	90: `${36 / 16}rem`,
	100: `${40 / 16}rem`,
	110: `${44 / 16}rem`,
	120: `${48 / 16}rem`,
	140: `${56 / 16}rem`,
	160: `${64 / 16}rem`,
	200: `${80 / 16}rem`,
	240: `${96 / 16}rem`,
	280: `${112 / 16}rem`,
	320: `${128 / 16}rem`,
	360: `${144 / 16}rem`,
	400: `${160 / 16}rem`,
	440: `${176 / 16}rem`,
	480: `${192 / 16}rem`,
	520: `${208 / 16}rem`,
	560: `${224 / 16}rem`,
	600: `${240 / 16}rem`,
	640: `${256 / 16}rem`,
	720: `${288 / 16}rem`,
	800: `${320 / 16}rem`,
	960: `${384 / 16}rem`,
}

export const widthMax = {
	xs: `${575.98 / 16}em`,
	sm: `${767.98 / 16}em`,
	md: `${991.98 / 16}em`,
	lg: `${1199.98 / 16}em`,
	xl: `${1339.98 / 16}em`,
	xl2: `${2255.98 / 16}em`,
}

export const widthMin = {
	sm: `${576 / 16}em`,
	md: `${768 / 16}em`,
	lg: `${992 / 16}em`,
	xl: `${1200 / 16}em`,
	xl2: `${1440 / 16}em`,
	xl3: `${2256 / 16}em`,
}

export const gutter = {
	sm: sp[20],
	md: sp[400],
	lg: sp[650],
	xl: sp[750],
}

export const radius = {
	none: '0px',
	sm: `${2 / 16}em`,
	base: `${4 / 16}em`,
	md: `${6 / 16}em`,
	lg: `${8 / 16}em`,
	xl: `${12 / 16}em`,
	'2xl': `${16 / 16}em`,
	'3xl': `${24 / 16}em`,
	full: '9999px',
}

export const borderwidth = {
	0: `0px`,
	2: `2px`,
	4: `4px`,
	8: `8px`,
	base: `1px`,
}

export const boxshadow = {
	sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
	base: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
	md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
	lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
	xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
	'2xl': `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
	'3xl': `0 35px 60px -15px rgba(0, 0, 0, 0.3)`,
	inner: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)`,
	none: 'none',
}

export const fill = css`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`

export const cover = css`
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`

export const grid = css`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap: ${gutter['xl']};
`
