import React from "react"

const Toast = ({ children, className, icon, message }) => {
	return (
		<div className={`p-4 rounded-md ${className}`}>
			<div className='flex'>
				<div className='flex-shrink-0'>{icon}</div>
				<div className='ml-2'>
					<h3 className='text-sm font-medium'>{message}</h3>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Toast
