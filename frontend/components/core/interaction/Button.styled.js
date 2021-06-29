import styled, { css } from 'styled-components'
import * as sp from '@styled/spacing'
import * as font from '@styled/fonts'
import * as color from '@styled/colors'
import {
	lighten,
	darken,
	rgba,
	readableColor,
	directionalProperty,
} from 'polished'

const btnBase = css`
	font-family: ${font.familyDefault};
	position: relative;
	z-index: 1;
	cursor: pointer;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 0.02857em;
	border-radius: ${props => props.radius};
	overflow: hidden;
	${
		'' /* box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%); */
	}
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	div::first-child {
		position: relative;
		z-index: 1;
	}

	${
		'' /* &:hover {
		box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
	}

	&:active {
		box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
			0 3px 7px -3px rgb(0 0 0 / 30%);
	} */
	}
`

const btnSize = css`
	${({ sm, md, lg }) => {
		if (sm) {
			return `
				padding: 4px ${sp.sp275} 2px ${sp.sp275};
				font-size: ${font.fz0};
				line-height: ${font.lh100};
				`
		} else if (md) {
			return `
				padding: ${sp.sp150} ${sp.sp650};
				font-size: ${font.fz100};
				line-height: ${font.lh400};
			`
		} else if (lg) {
			return `
				padding: ${sp.sp150} ${sp.sp700};
				font-size: ${font.fz200};
				line-height: ${font.lh700};
			`
		} else {
			return `
				padding: ${sp.sp100} ${sp.sp300};
				font-size: ${font.fz100};
				line-height: ${font.lh300};
			`
		}
	}}
`

const btnStyle = css`
	${({ corners, round, radius, shadow }) => {
		if (round) {
			return `
					border-radius: 100%;
				`
		}
		if (radius) {
			return `
					border-radius: ${radius}px;
				`
		}
		if (corners) {
			return `
				border-radius: ${corners[0] || 0}px ${corners[1] || 0}px ${corners[2] || 0}px ${
				corners[3] || 0
			}px;
			`
		}
		if (corners) {
			return `
				border-radius: ${corners[0] || 0}px ${corners[1] || 0}px ${corners[2] || 0}px ${
				corners[3] || 0
			}px;
			`
		}
	}}
`
const elementShadow = css`
	${({ shadow }) => {
		if (shadow) {
			let shad
			switch (shadow) {
				case 1:
					shad = `0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)`
					break
				case 2:
					shad = `0 5px 7px rgb(50 50 93 / 11%), 0 3px 5px rgb(0 0 0 / 8%)`
					break
				case 3:
					shad = `0 6px 8px rgb(50 50 93 / 11%), 0 5px 7px rgb(0 0 0 / 8%)`
					break
				case 4:
					shad = `0 7px 9px rgb(50 50 93 / 11%), 0 7px 9px rgb(0 0 0 / 11%)`
					break
				case 5:
					shad = `0 10px 12px rgb(50 50 93 / 13%), 0 9px 11px rgb(0 0 0 / 15%)`
					break
				case 6:
					shad = `0 14px 16px rgb(50 50 93 / 15%), 0 12px 14px rgb(0 0 0 / 17%)`
					break
				default:
					shad = `none`
			}
			return `
				box-shadow: ${shad};
			`
		}
	}}
`

const btnColor = css`
	${({
		primary,
		secondary,
		light,
		dark,
		success,
		warning,
		danger,
		outline,
		fill,
	}) => {
		if (primary) {
			if (outline) {
				return `
					background-color: transparent;
					color: ${color.primary[400]};
					border: 2px solid ${color.primary[400]};

					div span {
						background-color: ${rgba(color.primary[200], 0.5)};
					}

					&:hover {
						color: ${color.primary[200]};
						border-color: ${color.primary[200]};
					}
				`
			} else {
				return `
					background-color: ${color.primary[400]};
					color: ${readableColor(color.primary[400], color.white, color.black)};

					div span {
						background-color: ${rgba(color.white, 0.75)};
					}

					&:hover {
						color: ${readableColor(color.primary[200], color.white, color.black)};
						background-color: ${color.primary[200]};
					}
				`
			}
		} else if (secondary) {
			if (outline) {
				return `
					background-color: transparent;
					color: ${color.secondary[600]};
					border: 2px solid ${color.secondary[600]};

					div span {
						background-color: ${color.secondary[200]};
					}

					&:hover {
						color: ${color.secondary[400]};
						border-color: ${color.secondary[400]};
					}
				`
			} else {
				return `
					background-color: ${color.secondary[600]};
					color: ${readableColor(color.secondary[600], color.white, color.black)};

					div span {
						background-color: ${color.secondary[200]};
					}

					&:hover {
						color: ${readableColor(color.secondary[400], color.white, color.black)};
						background-color: ${color.secondary[400]};
					}
				`
			}
		} else if (light) {
			if (outline) {
				return `
					background-color: ${color.white};
					color: ${color.black};
					border: 2px solid ${color.black};

					div span {
						background-color: ${color.grey[300]};
					}

					&:hover {
						color: ${rgba(color.black, 0.75)});
						border-color: ${rgba(color.black, 0.75)};
					}
				`
			} else {
				return `
					background-color: ${color.white};
					color: ${color.black};

					div span {
						background-color: ${color.grey700};
					}

					&:hover {
						color: ${rgba(color.black, 0.75)};
					}
				`
			}
		} else if (dark) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${color.black};
				`
			} else {
				return `
					background-color: ${color.black};
				`
			}
		} else if (danger) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${font.primary400};
				`
			} else {
				return `

				`
			}
		} else if (warning) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${font.primary400};
				`
			} else {
				return `

				`
			}
		} else if (success) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${font.primary400};
				`
			} else {
				return `

				`
			}
		} else if (fill) {
			const shade =
				textColor(fill, color.white, color.black) === '#ffffff'
					? 50
					: -50
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${fill};
					color: ${fill};

					div span {
						background-color: ${rgba(fill, 0.25)};
					}

					&:hover {
						border-color: ${rgba(fill)};
						color: ${rgba(fill)};
					}
				`
			} else {
				return `
					color: ${readableColor(fill, color.white, color.black, true)};
					background-color: ${fill};

					div span {
						background-color: ${rgba(readableColor(fill), 0.75)};
					}

					&:hover {
						color: ${lighten(0.2, readableColor(fill, color.white, color.black, true))};
						background-color: ${lighten(0.1, fill)};
					}
				`
			}
		} else {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${font.primary400};
				`
			} else {
				return `

				`
			}
		}
	}}
`

const boxShadow = (top, left, blur, color, inset = false) => {
	return `box-shadow: ${
		inset ? 'inset' : ''
	} ${top}px ${left}px ${blur}px ${color};`
}

export const Button = styled(props => props.as)`
	${btnBase};
	${btnSize}
	${btnColor}
	${btnStyle}
	${elementShadow}
`
