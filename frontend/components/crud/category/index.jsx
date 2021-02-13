import React, { Fragment, useState, useEffect } from "react"
import Link from "next/link"
import Router from "next/router"
import { getCookie } from "../../../actions/auth"
import {
	create,
	getCategories,
	removeCategory,
} from "../../../actions/category"
import { Input } from "postcss"

const Category = () => {
	const [values, setValues] = useState({
		name: "",
		error: false,
		success: false,
		categories: [],
		removed: false,
		reload: false,
	})

	const { name, error, success, categories, removed } = values
	const token = getCookie("token")

	const clickSubmit = e => {
		e.preventDefault()
		console.log("create category ", name)
	}
	const handleChange = e => {
		setValues({
			...values,
			name: e.target.value,
			error: false,
			success: false,
			removed: "",
		})
		console.log("handleChange")
	}

	const newCategoryForm = () => (
		<form onSubmit={clickSubmit}>
			<div>
				<label
					htmlFor='categoryName'
					className='block text-sm font-medium text-gray-700'>
					Category Name
				</label>
				<div className='flex mt-1 rounded-md shadow-sm'>
					<span className='inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm'>
						New Category
					</span>
					<input
						type='text'
						onChange={handleChange}
						value={name}
						required
						name='category-name'
						id='categoryName'
						className='flex-1 block w-full min-w-0 px-3 py-2 border-gray-300 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Category name'
					/>
				</div>
				<button type='submit' className=''>
					Create Category
				</button>
			</div>
		</form>
	)

	return <Fragment>{newCategoryForm()}</Fragment>
}

export default Category
