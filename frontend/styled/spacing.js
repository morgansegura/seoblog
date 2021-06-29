import { generateMedia } from 'styled-media-query'
import { css } from 'styled-components'

export const sp = {
	50: `${4 / 16}rem`,
	100: `${5 / 16}rem`,
	125: `${6 / 16}rem`,
	150: `${8 / 16}rem`,
	200: `${10 / 16}rem`,
	250: `${11 / 16}rem`,
	275: `${12 / 16}rem`,
	300: `${13 / 16}rem`,
	325: `${14 / 16}rem`,
	350: `${15 / 16}rem`,
	400: `${16 / 16}rem`,
	500: `${18 / 16}rem`,
	600: `${20 / 16}rem`,
	650: `${24 / 16}rem`,
	675: `${25 / 16}rem`,
	700: `${30 / 16}rem`,
	750: `${32 / 16}rem`,
	800: `${36 / 16}rem`,
	850: `${40 / 16}rem`,
	875: `${45 / 16}rem`,
	900: `${48 / 16}rem`,
	950: `${52 / 16}rem`,
	1000: `${56 / 16}rem`,
	1050: `${60 / 16}rem`,
	1100: `${64 / 16}rem`,
	1200: `${72 / 16}rem`,
}

export const lane = {
	md: `${688 / 16}em`,
	lg: `${980 / 16}em`,
	xl: `${1128 / 16}em`,
}

export const gutter = {
	sm: sp[300],
	md: sp[400],
	lg: sp[650],
	xl: sp[750],
}

export const media = {
	xs: '0',
	sm: `${520 / 16}em`,
	md: `${768 / 16}em`,
	lg: `${1024 / 16}em`,
	xl: `${1440 / 16}em`,
}

export const radius = radius => `
	border-radius: ${radius || '4px'};
`
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
