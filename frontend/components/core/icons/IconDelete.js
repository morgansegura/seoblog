const IconDelete = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}>
			<title>bucket</title>
			<g
				strokeLinecap="square"
				strokeLinejoin="miter"
				strokeWidth="2"
				fill="none"
				stroke="#212121"
				strokeMiterlimit="10">
				<path
					d="M3.013,4.159l2,16.432C5.148,21.929,8.22,23,12,23s6.852-1.071,6.987-2.409l2-16.432"
					strokeLinecap="butt"></path>
				<ellipse
					cx="12"
					cy="4"
					rx="9"
					ry="3"
					stroke="#212121"></ellipse>
			</g>
		</svg>
	)
}
export default IconDelete
