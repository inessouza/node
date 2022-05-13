const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const JWTSEcret = "klj0930js0923"

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

function auth(req, res, next) {
	const authToken = req.headers['authorization']
	if (authToken != undefined) {
		const bearer = authToken.split(' ')
		var token = bearer[1]
		jwt.verify(token, JWTSEcret, (err, data) => {
			if (err) {
				res.status(401)
				res.json({ err: "Token Inválido"})
			} else {
				req.token = token
				req.loggedUser = { id: data.id, email: data.email }
				req.empresa = "Google"
				next()
			}
		})
	} else {
		res.status(401)
		res.json({ err: "Token Inválido!"})
	}
}

var db = {
	games: [
		{
			id: 23,
			title: "Call of Duty",
			year: 2019,
			price: 60
		},
		{
			id: 65,
			title: "Sea of Thieves",
			year: 2018,
			price: 40
		},
		{
			id: 2,
			title: "Minecraft",
			year: 2012,
			price: 20
		}
	],
	users: [
		{
			id: 1,
			name: "Inês Souza",
			email: "inessouzasp@gmail.com",
			password: "nodejs<3"
		},
		{
			id: 2,
			name: "Ana Souza",
			email: "anasouzasp@gmail.com",
			password: "java123"
		}
	]
}

app.get("/games", auth, (req, res) => {
	res.statusCode = 200
	res.json({ empresa: req.empresa, user: req.loggedUser, games: db.games})
})

app.get("/game/:id", auth, (req, res) => {
	if (isNaN(req.params.id)) {
		res.sendStatus(400)
	} else {
		var id = parseInt(req.params.id)
		var game = db.games.find(g => g.id == id)

		if (game != undefined) {
			res.statusCode = 200
			res.json(game)
		} else {
			res.sendStatus(404)
		}
	}
})

app.post("/game", auth, (req, res) => {
	var { title, price, year } = req.body

	db.games.push({
		id: 2323,
		title,
		price,
		year
	})

	res.sendStatus(200)
})

app.delete("/game/:id", auth,(req, res) => {
	if (isNaN(req.params.id)) {
		res.sendStatus(400)
	} else {
		var id = parseInt(req.params.id)
		var index = db.games.findIndex(g => g.id == id)

		if (index == -1) {
			res.sendStatus(404)
		} else {
			db.games.splice(index, 1)
			res.sendStatus(200)
		}
	}	
})

app.put("/game/:id", auth, (req, res) => {
	if (isNaN(req.params.id)) {
		res.sendStatus(400)
	} else {
		var id = parseInt(req.params.id)
		var game = db.games.find(g => g.id == id)

		if (game != undefined) {
			var { title, price, year } = req.body

			if (title != undefined) {
				game.title = title
			}

			if (price != undefined) {
				game.price = price
			}

			if (year != undefined) {
				game.year = year
			}

			res.sendStatus(200)
		} else {
			res.sendStatus(404)
		}
	}	
})

app.post("/auth", auth,(req, res) => {
	var { email, password } = req.body;

	if (email != undefined) {
		var user = db.users.find(u => u.email == email)

		if (user != undefined) {
			if (user.password == password) {
				jwt.sign({ id: user.id, email: user.email }, JWTSEcret, {expiresIn: '48h'}, (err, token) => {
					if(err) {
						res.status(400)
						res.json(({err: "Falha interna"}))
					} else {
						res.status(200)
						res.json({ token: token })
					}
				})
			} else {
				res.status(401)
				res.json({ err: "Credenciais Inválidas!" })
			}

		} else {
			res.status(404)
			res.json({ err: "E-mail não existe na base de dados!" })
		}
	} else {
		res.status(400)
		res.json({ err: "E-mail inválido!" })
	}
})

app.listen(3000, () => {
	console.log("Api Online")
})
