const mongoose = require('mongoose');
const articleModel = require('./article.js')
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/aprendendoMongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB')
})
.catch((error) => {
  console.log('Erro ao conectar ao MongoDB:', error.message)
})

const Article = mongoose.model("Article", articleModel)

/*const artigo = new Article({title: "As Flores", author: "Fulana das Flores", body: "Flores Azuis"})

// Salva os dados: 
artigo.save().then(() => {
  console.log("Artigo salvo")
}).catch(err => {
  console.log(err)
})

// Deleta o dado conforme o id referenciado:
/*Article.findByIdAndDelete("63f535a92a56e459db22626a").then(() => {
  console.log("Dado Removido!")
}).catch(err => {
  console.log(err)
})

// Atualiza o dado conforme o id referenciado:
Article.findByIdAndUpdate("63f5367d9a7e25cfe0b3d6e5", {
  title: "Vue do Zero!", 
  author: "Lima",
  body: "VueJS"
}).then(() => {
  console.log("Conteúdo atualizado.")
}).catch(err => {
  console.log(err)
})*/

// Localiza todos os dados:
Article.find({}).then(article => {
  console.log(article)
}).catch(err => {
  console.log(err)
})
