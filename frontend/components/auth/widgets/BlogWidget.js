import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { getCookie } from '@actions/auth'
import { getCategories } from '@actions/category'
import { getTags } from '@actions/tag'
import { createBlog } from '@actions/blog'
// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'
import Card from '@components/core/surface/Box'
import Toast from '@core/data-display/Toast'
// Icons
import IconWarning from '@core/icons/IconWarning'
import IconSuccess from '@core/icons/IconSuccess'
// Styles
import '@node_modules/react-quill/dist/quill.snow.css'
import styles from './BlogWidget.module.scss'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const BlogWidget = ({ className: givenClassName, router }) => {
	const classes = givenClassName
		? `${styles.widget} ${givenClassName}`
		: styles.widget

	const postFromLS = () => {
		if (typeof window === 'undefined') {
			return false
		}

		if (localStorage.getItem('blog')) {
			return JSON.parse(localStorage.getItem('blog'))
		} else {
			return false
		}
	}

	const [categories, setCategories] = useState([])
	const [tags, setTags] = useState([])
	const [checkedCat, setCheckedCat] = useState([])
	const [checkedTag, setCheckedTag] = useState([])

	const [toast, setToast] = useState(false)
	const [body, setBody] = useState(postFromLS())
	const [values, setValues] = useState({
		error: '',
		sizeError: '',
		success: '',
		formData: '',
		title: '',
		hidePublishButton: false,
	})

	const { error, sizeError, success, formData, title, hidePublishButton } =
		values
	const token = getCookie('token')

	useEffect(() => {
		setValues({ ...values, formData: new FormData() })
		initCategories()
		initTags()
	}, [router])

	const initCategories = () => {
		getCategories().then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error })
			} else {
				setCategories(data)
			}
		})
	}

	const initTags = () => {
		getTags().then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error })
			} else {
				setTags(data)
			}
		})
	}

	const handleBody = e => {
		setBody(e)
		formData.set('body', e)
		if (typeof window !== 'undefined') {
			localStorage.setItem('blog', JSON.stringify(e))
		}
	}

	const handleChange = name => e => {
		const value = name === 'photo' ? e.target.files[0] : e.target.value
		formData.set(name, value)
		setValues({
			...values,
			[name]: value,
			formData,
			error: '',
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		createBlog(formData, token).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error })
			} else {
				setValues({
					...values,
					title: '',
					error: '',
					success: `A new post titled, "${data.title}" was created.`,
				})
				setBody('')
				setCategories([])
				setTags([])
			}
		})
	}
	const handleToast = () => {
		const display = error || success

		if (display) {
			setToast(true)
		}
	}
	const displayToast = () => {
		if (toast && error) {
			return (
				<Toast
					open={toast}
					close={() => setToast(false)}
					error
					top
					right>
					<IconWarning className={styles.icon} />
					<p>{error}</p>
				</Toast>
			)
		}
		if (toast && success) {
			return (
				<Toast
					open={toast}
					close={() => setToast(false)}
					success
					top
					right>
					<IconSuccess className={styles.icon} />
					<p>{success}</p>
				</Toast>
			)
		}
	}

	const handleCategoryCheckbox = c => {
		setValues({ ...values, error: '' })
		const clickedCat = checkedCat.indexOf(c)
		const allCats = [...checkedCat]

		if (clickedCat === -1) {
			allCats.push(c)
		} else {
			allCats.splice(clickedCat, 1)
		}
		setCheckedCat(allCats)
		formData.set('categories', allCats)
	}

	const handleTagCheckbox = t => {
		setValues({ ...values, error: '' })
		const clickedTag = checkedTag.indexOf(t)
		const allTags = [...checkedTag]

		if (clickedTag === -1) {
			allTags.push(t)
		} else {
			allTags.splice(clickedTag, 1)
		}
		setCheckedTag(allTags)
		formData.set('tags', allTags)
	}

	const displayCategories = () =>
		categories &&
		categories.map((c, i) => (
			<div key={i} className={styles.asideList}>
				<input
					onChange={() => handleCategoryCheckbox(c._id)}
					type="checkbox"
					className={styles.checkbox}
				/>
				<label className={styles.name}>{c.name}</label>
			</div>
		))

	const displayTags = () =>
		tags &&
		tags.map((t, i) => (
			<div key={i} className={styles.asideList}>
				<input
					onChange={() => handleTagCheckbox(t._id)}
					type="checkbox"
					className={styles.checkbox}
				/>
				<label className={styles.name}>{t.name}</label>
			</div>
		))

	const createPostForm = () => (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div>
				<TextField
					type="text"
					label="Title"
					value={title}
					minLength="3"
					maxLength="60"
					onChange={handleChange('title')}
				/>
			</div>
			<div className={styles.imageField}>
				{/* {files[0] && (
						<div>
							<img src={files[0].url} alt={title} />
						</div>
					)} */}
				<div className={styles.label}>Feaured Image</div>
				<div className={styles.sublabel}>Max size 3mb</div>
				<Button as="label" className={styles.button}>
					Upload Featured Image
					<input
						onChange={handleChange('photo')}
						type="file"
						accept="image/*"
						hidden
					/>
				</Button>
			</div>
			<br />
			<div>
				<ReactQuill
					value={body}
					className={styles.textEditor}
					placeholder="Type the body of this post"
					onChange={handleBody}
					modules={BlogWidget.modules}
					formats={BlogWidget.formats}
				/>
			</div>
			<div className={styles.buttonBlock}>
				<Button
					as="button"
					type="submit"
					className={styles.button}
					onClick={handleToast}>
					Create
				</Button>
			</div>
		</form>
	)

	return (
		<>
			{displayToast()}
			<div className={classes}>
				{createPostForm()}
				Categories
				{displayCategories()}
				Tags:
				{displayTags()}
			</div>
		</>
	)
}

BlogWidget.modules = {
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }, { size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image', 'video'],
		['clean'],
		['code-block'],
	],
}

BlogWidget.formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image',
	'video',
	'code-block',
]

export default withRouter(BlogWidget)
