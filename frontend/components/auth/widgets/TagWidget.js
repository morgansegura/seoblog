import { useState, useEffect } from 'react'
import { getCookie } from '@actions/auth'
import { createTag, getTags, removeTag } from '@actions/tag'
// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'
import Text from '@core/typography/Text'
import AnimateFadeToggle from '@core/utils/AnimateFadeToggle'
import Prompt from '@core/data-display/Prompt'
// Icons
import IconDelete from '@core/icons/IconDelete'
// Styles
import styles from './TagWidget.module.scss'

const TagWidget = ({ className: givenClassName, title }) => {
	const classes = givenClassName
		? `${styles.widget} ${givenClassName}`
		: styles.widget

	const [values, setValues] = useState({
		name: '',
		error: false,
		success: false,
		tags: [],
		removed: false,
		reload: false,
	})

	const { name, error, success, tags, removed, reload } = values
	const token = getCookie('token')

	const loadTags = () => {
		getTags().then(data => {
			if (data.error) {
				console.log(data.error)
			} else {
				setValues({
					...values,
					tags: data,
				})
			}
		})
	}

	useEffect(() => {
		loadTags()
	}, [reload])

	const handleDelete = slug => {
		removeTag(slug, token).then(data => {
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
			`Are you sure you want to delete the tag "${item.name}"`
		)

		if (answer) {
			handleDelete(item.slug)
		}
	}

	const TagButton = ({ item }) => {
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
						title={`Delete Tag: ${item.name}`}
						className={styles.option}
						onClick={() => handleDeletePrompt(item)}>
						<IconDelete />
					</div>
				</AnimateFadeToggle>
			</Button>
		)
	}

	const displayTags = () => {
		return tags.map((c, i) => {
			return (
				<div key={i} className={styles.options}>
					<TagButton item={c} />
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
		createTag({ name }, token).then(data => {
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
			return <p>There tag already exitsts</p>
		}
	}
	const showSuccess = () => {
		if (success) {
			return <p>The tag was successfully created.</p>
		}
	}
	const showRemoved = () => {
		if (removed) {
			return <p>The tag has been removed.</p>
		}
	}

	const newTagForm = () => (
		<form onSubmit={handleSubmit} className={styles.form}>
			<TextField
				type="text"
				label="Type a new tag name"
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
				{newTagForm()}
				<div className={styles.itemList}>{displayTags()}</div>
			</div>
		</>
	)
}

export default TagWidget
