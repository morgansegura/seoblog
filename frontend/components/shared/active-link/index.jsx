import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default ({ href, children }) => {
	const router = useRouter()
	let className = children.props.className || ""

	if (router.pathname === href) {
		className = `${className} text-indigo-600 border-indigo-500`
		console.log(className)
	} else {
		className = `${className} text-gray-500 hover:text-gray-700 hover:border-gray-300`
		console.log(className)
	}
	console.log(router.pathname)
	console.log(href)

	return (
		<Link href={href}>{React.cloneElement(children, { className })}</Link>
	)
}
