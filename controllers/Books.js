import Books from "../models/BookModel.js"

export const Index = async(req, res) => {
	try{
		const books = await Books.findAll()
		res.json(books)
	}catch(e){
		console.log(e)
	}
}

export const Store = async(req, res) => {
	const { author, country, language, pages, title, year } = req.body
	try{
		await Books.create({
			author: author,
			country: country,
			language: language,
			pages: pages,
			title: title,
			year: year,
		})
		res.json({msg: "Success create Book"})
	}catch(e){
		console.log(e)
	}
}

export const Update = async(req, res) => {
	try{
		const bookId = req.params.id
		const { author, country, language, pages, title, year } = req.body
		const book = {
	        author: author,
			country: country,
			language: language,
			pages: pages,
			title: title,
			year: year,
        }
		await Books.update(book, {
            where : {
                id : bookId
            }
        })
		res.json({msg: "Success update Book" + title})
	}catch(e){
		console.log(e)
	}
}

export const Delete = async(req, res) => {
	const bookId = req.params.id
	try{
		await Books.destroy({
            where : {
                id : bookId
            }
        })
		res.json({msg: "Success delete Book" + title})
	}catch(e){
		console.log(e)
	}
}
