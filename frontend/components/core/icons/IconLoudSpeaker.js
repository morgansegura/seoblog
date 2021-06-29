const IconLoudSpeaker = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}>
			<g fill="#212121">
				<rect x="20" y="10" width="4" height="2"></rect>
				<rect
					x="18.664"
					y="5"
					width="3.973"
					height="2"
					transform="translate(-0.191 11.298) rotate(-30.465)"></rect>
				<rect
					x="19.65"
					y="14.014"
					width="2"
					height="3.973"
					transform="translate(-3.611 25.687) rotate(-59.536)"></rect>
				<path
					d="M9,18.775v1.9L4,19.246V17.108l-2-.666V20a1,1,0,0,0,.725.961l7,2A1,1,0,0,0,11,22V19.442Z"
					fill="#212121"></path>
				<path
					d="M16,20a1.01,1.01,0,0,1-.316-.051l-15-5A1,1,0,0,1,0,14V8a1,1,0,0,1,.684-.949l15-5A1,1,0,0,1,17,3V19a1,1,0,0,1-1,1Z"
					fill="#212121"></path>
			</g>
		</svg>
	)
}
export default IconLoudSpeaker
