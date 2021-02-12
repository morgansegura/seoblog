const Category = require("../models/category")
const slugify = require("slugify")
const dbErrorHandler = require("../helpers/dbErrorHandler")

exports.create = (req, res) => {
	const { name } = req.body
	let slug = slugify(name).toLowerCase()

	let category = new Category({ name, slug })

	category.save((err, data) => {
		if (err) {
			return res.status(404).json({
				error: dbErrorHandler(err),
			})
		}
		res.json(data)
	})
}
