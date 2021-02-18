import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { ActiveLink } from '../../../components/shared'

const Tabs = ({ children, title, tabData }) => {
	const [option, setOption] = useState(false)
	const router = useRouter()
	const handleChange = value => {
		router.push(value)
	}
	const optionSelected = value => {
		if (router.pathname === value) {
			return value
		}
	}
	return (
		<Fragment>
			<div className="relative pb-5 border-b border-gray-200 sm:pb-0">
				<div className="md:flex md:items-center md:justify-between">
					<h3 className="text-lg font-medium leading-6 text-gray-900">
						{title}
					</h3>
				</div>
				<div className="mt-4">
					{/*<!-- Dropdown menu on small screens -->*/}
					<div className="sm:hidden">
						<label htmlFor="selected-tab" className="sr-only">
							Select a tab
						</label>
						<select
							onChange={e => handleChange(e.target.value)}
							id="selected-tab"
							name="selected-tab"
							className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
							{tabData &&
								tabData.map(({ path, title }) => (
									<option key={title} value={path}>
										{title}
									</option>
								))}
						</select>
					</div>
					{/*<!-- Tabs at small breakpoint and up -->*/}
					<div className="hidden sm:block">
						<nav className="flex -mb-px space-x-8">
							{tabData &&
								tabData.map(({ path, title }) => (
									<ActiveLink key={title} href={path}>
										<a className="px-1 pb-4 text-sm font-medium border-b-2 border-transparent whitespace-nowrap">
											{title}
										</a>
									</ActiveLink>
								))}
						</nav>
					</div>
				</div>
			</div>
			{children}
		</Fragment>
	)
}

export default Tabs
