const IconWarning = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}>
			<g
				strokeLinecap="square"
				strokeLinejoin="miter"
				strokeWidth="2"
				fill="none"
				stroke="#212121"
				strokeMiterlimit="10">
				<polyline
					points=" 6,12 10,16 18,8 "
					stroke="#212121"></polyline>{' '}
				<circle cx="12" cy="12" r="11"></circle>
			</g>
		</svg>
	)
}
export default IconWarning
