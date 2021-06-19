const IconSkull = ({ ...props }) => {
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
				<line x1="10" y1="23" x2="10" y2="20" stroke="#212121"></line>{' '}
				<line x1="14" y1="23" x2="14" y2="20" stroke="#212121"></line>{' '}
				<circle cx="7.5" cy="11.5" r="2.5" stroke="#212121"></circle>{' '}
				<circle cx="16.5" cy="11.5" r="2.5" stroke="#212121"></circle>{' '}
				<path d="M22,11A10,10,0,1,0,6,18.986V22a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18.986A9.972,9.972,0,0,0,22,11Z"></path>
			</g>
		</svg>
	)
}
export default IconSkull
