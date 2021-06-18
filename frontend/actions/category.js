import fetch from 'isomorphic-fetch'
import { API } from '@/config'

// Create
export const createCategory = (category, token) => {
	return fetch(`${API}/category`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	})
		.then(response => {
			return response.json()
		})
		.catch(err => console.log(err))
}

// All Categories
export const getCategories = () => {
	return fetch(`${API}/categories`, {
		method: 'GET',
	})
		.then(response => {
			return response.json()
		})
		.catch(err => console.log(err))
}

// Single Category
export const singleCategory = slug => {
	return fetch(`${API}/category/${slug}`, {
		method: 'GET',
	})
		.then(response => {
			return response.json()
		})
		.catch(err => console.log(err))
}

// Remove
export const removeCategory = (slug, token) => {
	return fetch(`${API}/category/${slug}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			return response.json()
		})
		.catch(err => console.log(err))
}
