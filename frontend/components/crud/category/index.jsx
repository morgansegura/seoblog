import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { getCookie } from '../../../actions/auth'
import { Button, Toast } from '../../../components/shared'
import {
	create,
	getCategories,
	removeCategory,
} from '../../../actions/category'
import {
	BiCheckCircle,
	BiError,
	BiMinusCircle,
	BiToggleLeft,
	BiToggleRight,
} from 'react-icons/bi'

const Category = () => {
	const [showTag, setShowTag] = useState(false)
	const [values, setValues] = useState({
		name: '',
		error: false,
		success: false,
		categories: [],
		removed: false,
		reload: false,
	})

	const { name, error, success, categories, removed, reload } = values
	const token = getCookie('token')

	useEffect(() => {
		loadCategories()
	}, [reload])

	const loadCategories = () => {
		getCategories().then(data => {
			if (data.error) {
				console.log(data.error)
			} else {
				setValues({ ...values, categories: data })
			}
		})
	}

	const showCategories = () => {
		return categories.map((c, i) => {
			return (
				<div
					onClick={() => deleteConfirm(c.slug)}
					key={i}
					className="flex items-center px-3 py-1 mt-2 mr-2 text-sm transition duration-300 border border-gray-200 rounded cursor-pointer group hover:shadow">
					{c.name}
					<span
						title={`Delete ${c.name}`}
						className={`inline-flex items-center ml-2 px-0.5 py-0.5 rounded-full text-xs font-medium bg-transition text-gray-900 group-hover:bg-red-100 transition duration-300 ease-out  ${
							showTag ? 'inline-flex' : 'hidden'
						}`}>
						<BiMinusCircle className="w-4 h-4" />
					</span>
				</div>
			)
		})
	}

	const deleteConfirm = slug => {
		let answer = window.confirm(
			'Are you sure you want to delete this category?'
		)
		if (answer) {
			deleteCategory(slug)
		}
		// deleteCategory(slug)
	}

	const deleteCategory = slug => {
		removeCategory(slug, token).then(data => {
			if (data.error) {
				console.log(data.error)
			} else {
				setValues({
					...values,
					error: false,
					success: false,
					name: '',
					removed: !removed,
					reload: !reload,
				})
			}
		})
	}

	const clickSubmit = e => {
		e.preventDefault()
		create({ name }, token).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error, success: false })
			} else {
				setValues({
					...values,
					error: false,
					success: true,
					name: '',
					removed: false,
					reload: !reload,
				})
			}
		})
	}
	const handleChange = e => {
		setValues({
			...values,
			name: e.target.value,
			error: false,
			success: false,
			removed: '',
		})
	}

	const showSuccess = () => {
		if (success) {
			return (
				<Toast
					className="my-4 text-green-700 bg-green-50"
					message="Category created!"
					icon={<BiCheckCircle className="w-5 h-5 text-green-700" />}
				/>
			)
		}
	}
	const showError = () => {
		if (error) {
			return (
				<Toast
					className="my-4 text-red-700 bg-red-50"
					message={error}
					icon={<BiError className="w-5 h-5 text-red-700" />}
				/>
			)
		}
	}
	const showRemoved = () => {
		if (removed) {
			return (
				<Toast
					className="my-4 text-green-700 bg-green-50"
					message="Category successfully removed!"
					icon={<BiCheckCircle className="w-5 h-5 text-green-700" />}
				/>
			)
		}
	}

	const mouseMoveHandler = e => {
		setValues({ ...values, error: false, sucess: false, removed: '' })
	}

	const newCategoryForm = () => (
		<form onSubmit={clickSubmit}>
			<div>
				<div className="flex mt-1 rounded-md shadow-sm">
					<span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
						Category
					</span>
					<input
						type="text"
						onChange={handleChange}
						value={name}
						required
						name="category-name"
						id="categoryName"
						className="flex-1 block w-full min-w-0 px-3 py-2 border border-gray-300 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Type the category name."
					/>
				</div>
				<div className="pt-4 sm:flex-shrink-0 sm:flex sm:items-center">
					<Button type="submit">Create Category</Button>
				</div>
			</div>
		</form>
	)

	return (
		<Fragment>
			{showSuccess()}
			{showError()}

			<div onMouseMove={mouseMoveHandler}>
				{newCategoryForm()}
				{showRemoved()}
				{values.categories.length && (
					<div className="relative p-6 mt-6 border border-gray-200 rounded">
						<div className="flex justify-between mb-3">
							<h3 className="text-xs font-semibold text-gray-600 uppercase">
								Category List
								<span className="inline-flex items-center ml-2 px-1.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
									{values.categories.length}
								</span>
							</h3>
							<div className="">
								<button
									onClick={() => setShowTag(!showTag)}
									type="button"
									className={`relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none ${
										showTag
											? 'bg-indigo-600'
											: 'bg-gray-200'
									}`}
									aria-pressed="false">
									<span className="sr-only">Use setting</span>
									<span
										className={`relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0 ${
											showTag
												? 'translate-x-5'
												: 'translate-x-0'
										}`}>
										<span
											className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100 ${
												showTag
													? 'opacity-0 ease-out duration-100'
													: 'opacity-100 ease-in duration-200'
											}`}
											aria-hidden="true">
											<svg
												className="w-3 h-3 text-gray-400 bg-white"
												fill="none"
												viewBox="0 0 12 12">
												<path
													d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
										{/*<!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->*/}
										<span
											className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0 ${
												showTag
													? 'opacity-100 ease-in duration-200'
													: 'opacity-0 ease-out duration-100'
											}`}
											aria-hidden="true">
											<svg
												className="w-3 h-3 text-indigo-600 bg-white"
												fill="currentColor"
												viewBox="0 0 12 12">
												<path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
											</svg>
										</span>
									</span>
								</button>
							</div>
						</div>
						<div className="flex flex-wrap">{showCategories()}</div>
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default Category
