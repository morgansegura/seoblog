const IconMenu = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}>
			<g fill="#212121">
				<path d="M23,10H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1v-2C24,10.4,23.6,10,23,10z"></path>{' '}
				<path
					fill="#212121"
					d="M23,2H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3C24,2.4,23.6,2,23,2z"></path>{' '}
				<path
					fill="#212121"
					d="M23,18H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1v-2C24,18.4,23.6,18,23,18z"></path>
			</g>
		</svg>
	)
}
export default IconMenu
