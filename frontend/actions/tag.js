import fetch from 'isomorphic-fetch'
import { API } from '@/config'

// Create
export const createTag = (tag, token) => {
	return fetch(`${API}/tag`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(tag),
	})
		.then(response => {
			return response.json()
		})
		.catch(err => console.log(err))
}

// All Tags
export const getTags = () => {
	return fetch(`${API}/tags`, {
		method: 'GET',
	})
		.then(response => {
			return response.json()
		})
		.catch(err => console.log(err))
}

// Single Tag
export const singleTag = slug => {
	return fetch(`${API}/tag/${slug}`, {
		method: 'GET',
	})
		.then(response => {
			return response.json()
		})
		.catch(err => console.log(err))
}

// Remove
export const removeTag = (slug, token) => {
	return fetch(`${API}/tag/${slug}`, {
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
