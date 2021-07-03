import styled from 'styled-components'
import { $p, $px, $py, $pt, $pr, $pb, $pl } from '@styled/variants/padding'
import { $m, $mx, $my, $mt, $mr, $mb, $ml } from '@styled/variants/margin'
import {
	$radius,
	$radiusT,
	$radiusR,
	$radiusB,
	$radiusL,
} from '@styled/variants/radius'
import {
	$border,
	$borderT,
	$borderR,
	$borderB,
	$borderL,
} from '@styled/variants/border'
import { $shadow } from '@styled/variants/shadow'
import { $borderfill, $fill } from '@styled/variants/fill'

export const Container = styled(props => props.as)`
	${({ p }) => {
		if (p) return $p(p)
	}}

	${({ px }) => {
		if (px) return $px(px)
	}}

	${({ py }) => {
		if (py) return $py(py)
	}}

	${({ pt }) => {
		if (pt) return $pt(pt)
	}}

	${({ pr }) => {
		if (pr) return $pr(pr)
	}}

	${({ pb }) => {
		if (pb) return $pb(pb)
	}}

	${({ pl }) => {
		if (pl) return $pl(pl)
	}}

    ${({ m }) => {
		if (m) return $m(m)
	}}

    ${({ mx }) => {
		if (mx) return $mx(mx)
	}}

    ${({ my }) => {
		if (my) return $my(my)
	}}

    ${({ mt }) => {
		if (mt) return $mt(mt)
	}}

    ${({ mr }) => {
		if (mr) return $mr(mr)
	}}

    ${({ mb }) => {
		if (mb) return $mb(mb)
	}}

    ${({ ml }) => {
		if (ml) return $ml(ml)
	}}

    ${({ shadow }) => {
		if (shadow) return $shadow(shadow)
	}}

    ${({ fill }) => {
		if (fill) return $fill(fill)
	}}

    ${({ border }) => {
		if (border) return $border(border)
	}}

    ${({ borderT }) => {
		if (borderT) return $borderT(borderT)
	}}

    ${({ borderR }) => {
		if (borderR) return $borderR(borderR)
	}}

    ${({ borderB }) => {
		if (borderB) return $borderB(borderB)
	}}

    ${({ borderL }) => {
		if (borderL) return $borderL(borderL)
	}}

    ${({ borderfill }) => {
		if (borderfill) return $borderfill(borderfill)
	}}

    ${({ radius }) => {
		if (radius) return $radius(radius)
	}}

    ${({ radiusT }) => {
		if (radiusT) return $radiusT(radiusT)
	}}

    ${({ radiusR }) => {
		if (radiusR) return $radiusR(radiusR)
	}}

    ${({ radiusB }) => {
		if (radiusB) return $radiusB(radiusB)
	}}

    ${({ radiusL }) => {
		if (radiusL) return $radiusL(radiusL)
	}}
`
