import styled from 'styled-components'
import { f100 } from '@styled/fonts'
import * as color from '@styled/colors'
import { rem, readableColor } from 'polished'

export const Container = styled.div``
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	flex-wrap: wrap;
	width: calc(100% / 6 - 16px);

	div {
		${f100};

		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16px;
		margin-bottom: 16px;

		${Object.entries(color.grey).map(
			([key, value]) => `&.grey-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}

		${Object.entries(color.primary).map(
			([key, value]) => `&.primary-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}

		${Object.entries(color.secondary).map(
			([key, value]) => `&.secondary-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}

		${Object.entries(color.warning).map(
			([key, value]) => `&.warning-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}

		${Object.entries(color.danger).map(
			([key, value]) => `&.danger-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}

		${Object.entries(color.success).map(
			([key, value]) => `&.success-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}

		${Object.entries(color.parchment).map(
			([key, value]) => `&.parchment-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}

		${Object.entries(color.clay).map(
			([key, value]) => `&.clay-${key} {
                        background-color: ${value};
                        color: ${readableColor(value)};
                }`
		)}
	}
`

export const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: 8px;
`
