export const border = (side, width, color, style) => `
	border${'-' + side || ''}: ${width || 2}px ${style || 'solid'} ${
	color || 'transparent'
}
`
