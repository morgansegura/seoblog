const IconClose = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}>
			<title>e-remove</title>
			<g
				strokeLinecap="square"
				strokeLinejoin="miter"
				strokeWidth="2"
				fill="none"
				stroke="#212121"
				strokeMiterlimit="10">
				<line x1="19" y1="5" x2="5" y2="19"></line>{' '}
				<line x1="19" y1="19" x2="5" y2="5"></line>
			</g>
		</svg>
	)
}
export default IconClose
