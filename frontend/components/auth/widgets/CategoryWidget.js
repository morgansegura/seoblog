import { useState, useEffect } from 'react'
import { getCookie } from '@actions/auth'
import {
	createCategory,
	getCategories,
	removeCategory,
} from '@actions/category'
// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'
import Text from '@core/typography/Text'
import AnimateFadeToggle from '@core/utils/AnimateFadeToggle'
// Icons
import IconDelete from '@core/icons/IconDelete'
// Styles
import styles from './CategoryWidget.module.scss'

const CategoryWidget = ({ className: givenClassName, title }) => {
	const classes = givenClassName
		? `${styles.widget} ${givenClassName}`
		: styles.widget

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

	const loadCategories = () => {
		getCategories().then(data => {
			if (data.error) {
				console.log(data.error)
			} else {
				setValues({
					...values,
					categories: data,
				})
			}
		})
	}

	useEffect(() => {
		loadCategories()
	}, [reload])

	const handleDelete = slug => {
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

	const handleDeletePrompt = item => {
		let answer = window.confirm(
			`Are you sure you want to delete the category "${item.name}"`
		)

		if (answer) {
			handleDelete(item.slug)
		}
	}

	const CategoryButton = ({ item }) => {
		const [displayOptions, setDisplayOptions] = useState(false)

		const handleDisplayOptions = id => {
			setDisplayOptions(!displayOptions)
		}

		return (
			<Button
				onClick={() => handleDisplayOptions(item._id)}
				className={styles.tagButton}>
				<div>{item.name}</div>
				<AnimateFadeToggle
					in={displayOptions}
					timeout={0}
					classes={{
						enterDone: styles.fadeIn,
						exit: styles.fadeOut,
					}}>
					<div
						title={`Delete Category: ${item.name}`}
						className={styles.option}
						onClick={() => handleDeletePrompt(item)}>
						<IconDelete />
					</div>
				</AnimateFadeToggle>
			</Button>
		)
	}

	const displayCategories = () => {
		return categories.map((c, i) => {
			return (
				<div key={i} className={styles.options}>
					<CategoryButton item={c} />
				</div>
			)
		})
	}

	const handleChange = e => {
		setValues({
			...values,
			name: e.target.value,
			error: false,
			success: false,
			removed: '',
			reload: false,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		createCategory({ name }, token).then(data => {
			if (data.error) {
				setValues({
					...values,
					error: data.error,
					success: false,
				})
			} else {
				setValues({
					...values,
					error: false,
					success: true,
					name: '',
					removed: !removed,
					reload: !reload,
				})
			}
		})
	}

	const showError = () => {
		if (error) {
			return <p>Ther category already exitsts</p>
		}
	}
	const showSuccess = () => {
		if (success) {
			return <p>The category was successfully created.</p>
		}
	}
	const showRemoved = () => {
		if (removed) {
			return <p>The category has been removed.</p>
		}
	}

	const newCategoryForm = () => (
		<form onSubmit={handleSubmit} className={styles.form}>
			<TextField
				type="text"
				// className={styles.textInput}
				label="Type a new category name"
				value={name}
				onChange={handleChange}
				required
			/>
			<div className={styles.buttonBlock}>
				<Button as="button" type="submit" className={styles.button}>
					Create
				</Button>
			</div>
		</form>
	)

	return (
		<>
			<div className={classes}>
				{title && <Text as="h3">{title}</Text>}
				{newCategoryForm()}
				<div className={styles.itemList}>{displayCategories()}</div>
			</div>
		</>
	)
}

export default CategoryWidget
