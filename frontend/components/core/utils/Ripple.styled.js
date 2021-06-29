import styled, { keyframes } from 'styled-components'
import { white } from '@styled/colors'
import { border, rgba, textColor } from '@styled/utils'

export const Ripple = styled.div`
	position: absolute;
	z-index: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	span {
		z-index: 0;
		transform: scale(0);
		border-radius: 100%;
		position: absolute;
		opacity: 0.75;
		animation-name: ripple;
		background-color: ${props => props.color || white};
		animation-duration: ${props => props.duration || '850'}ms;
		pointer-events: none;
	}
	@keyframes ripple {
		to {
			opacity: 0;
			transform: scale(4);
		}
	}
`
