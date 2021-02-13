import React, { Fragment, useState, useEffect } from "react"
import Link from "next/link"
import Router from "next/router"
import { getCookie } from "../../../actions/auth"
import { Button, Toast } from "../../../components/shared"
import {
	create,
	getCategories,
	removeCategory,
} from "../../../actions/category"
import { BiCheckCircle, BiError } from "react-icons/bi"

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

	useEffect(() => {
		loadCategories()
	}, [])

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
				<button
					key={i}
					className='px-3 py-1 text-sm border border-gray-200 rounded'>
					{c.name}
				</button>
			)
		})
	}

	const clickSubmit = e => {
		e.preventDefault()
		create({ name }, token).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error, success: false })
			} else {
				setValues({ ...values, error: false, success: true, name: "" })
			}
		})
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

	const showSuccess = () => {
		if (success) {
			return (
				<Toast
					className='my-4 text-green-700 bg-green-50'
					message='Category created!'
					icon={<BiCheckCircle className='w-5 h-5 text-green-700' />}
				/>
			)
		}
	}
	const showError = () => {
		if (error) {
			return (
				<Toast
					className='my-4 text-red-700 bg-red-50'
					message='Category already exists!'
					icon={<BiError className='w-5 h-5 text-red-700' />}
				/>
			)
		}
	}
	const showRemoved = () => {
		if (removed) {
			return (
				<Toast
					className='my-4 text-green-700 bg-green-50'
					message='Category successfully removed!'
					icon={<BiCheckCircle className='w-5 h-5 text-green-700' />}
				/>
			)
		}
	}

	const newCategoryForm = () => (
		<form onSubmit={clickSubmit}>
			<div>
				<div className='flex mt-1 rounded-md shadow-sm'>
					<span className='inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm'>
						Category
					</span>
					<input
						type='text'
						onChange={handleChange}
						value={name}
						required
						name='category-name'
						id='categoryName'
						className='flex-1 block w-full min-w-0 px-3 py-2 border border-gray-300 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Type the category name.'
					/>
				</div>
				<div class='pt-4 sm:flex-shrink-0 sm:flex sm:items-center'>
					<Button type='submit'>Create Category</Button>
				</div>
			</div>
		</form>
	)

	return (
		<Fragment>
			{showSuccess()}
			{showError()}
			{showRemoved()}

			{newCategoryForm()}

			{values.categories.length && (
				<div className='relative p-6 mt-6 border border-gray-200 rounded'>
					<h3 className='mb-3 text-xs font-semibold text-gray-600 uppercase'>
						Category List
						<span class='inline-flex items-center ml-2 px-1.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800'>
							{values.categories.length}
						</span>
					</h3>
					<div className='flex space-x-2'>{showCategories()}</div>
				</div>
			)}
		</Fragment>
	)
}

export default Category
