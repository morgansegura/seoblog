import { css } from 'styled-components'

// Families
export const familyDefault = `Roboto, Graphik, -apple-system, BlinkMacSystemFont, Segoe UI,
	Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
	sans-serif;`

// Sizes

export const fz = {
	0: `${10 / 16}rem`,
	100: `${12 / 16}rem`,
	200: `${14 / 16}rem`,
	300: `${16 / 16}rem`,
	400: `${18 / 16}rem`,
	500: `${21 / 16}rem`,
	600: `${24 / 16}rem`,
	700: `${26 / 16}rem`,
	800: `${31 / 16}rem`,
	900: `${37 / 16}rem`,
	1000: `${48 / 16}rem`,
}

export const lh = {
	0: `${16 / 16}rem`,
	100: `${20 / 16}rem`,
	200: `${20 / 16}rem`,
	300: `${28 / 16}rem`,
	400: `${32 / 16}rem`,
	500: `${32 / 16}rem`,
	600: `${32 / 16}rem`,
	700: `${40 / 16}rem`,
	800: `${48 / 16}rem`,
	900: `${52 / 16}rem`,
	1000: `${60 / 16}rem`,
}

export const f0 = css`
	font-size: ${fz[0]};
	line-height: ${lh[0]};
`
export const f100 = css`
	font-size: ${fz[100]};
	line-height: ${lh[100]};
`
export const f200 = css`
	font-size: ${fz[200]};
	line-height: ${lh[200]};
`
export const f300 = css`
	font-size: ${fz[300]};
	line-height: ${lh[300]};
`
export const f400 = css`
	font-size: ${fz[400]};
	line-height: ${lh[400]};
`
export const f500 = css`
	font-size: ${fz[500]};
	line-height: ${lh[500]};
`
export const f600 = css`
	font-size: ${fz[600]};
	line-height: ${lh[600]};
`
export const f700 = css`
	font-size: ${fz[700]};
	line-height: ${lh[700]};
`
export const f800 = css`
	font-size: ${fz[800]};
	line-height: ${lh[800]};
`
export const f900 = css`
	font-size: ${fz[900]};
	line-height: ${lh[900]};
`
export const f1000 = css`
	font-size: ${fz[1000]};
	line-height: ${lh[1000]};
`
