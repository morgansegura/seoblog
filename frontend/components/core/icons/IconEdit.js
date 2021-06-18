const IconEdit = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}>
			<title>pencil</title>
			<g
				strokeLinecap="square"
				strokeLinejoin="miter"
				strokeWidth="2"
				fill="none"
				stroke="#212121"
				strokeMiterlimit="10">
				<line
					x1="14.328"
					y1="4.672"
					x2="19.328"
					y2="9.672"
					strokeLinecap="butt"
					stroke="#212121"></line>{' '}
				<path d="M8,21,2,22l1-6L16.414,2.586a2,2,0,0,1,2.828,0l2.172,2.172a2,2,0,0,1,0,2.828Z"></path>
			</g>
		</svg>
	)
}
export default IconEdit
