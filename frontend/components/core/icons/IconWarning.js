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
				stroke-width="2"
				fill="none"
				stroke="#212121"
				strokeMiterlimit="10">
				<circle cx="12" cy="12" r="11"></circle>{' '}
				<line x1="12" y1="7" x2="12" y2="13" stroke="#212121"></line>{' '}
				<circle
					cx="12"
					cy="17"
					r="1"
					stroke="none"
					fill="#212121"></circle>
			</g>
		</svg>
	)
}
export default IconWarning
