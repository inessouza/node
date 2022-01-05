class Filme {
	constructor(titulo, ano, genero, diretor, duracao) {
		this.titulo = titulo;
		this.ano = ano;
		this.genero = genero;
		this.diretor = diretor;
		this.duracao = duracao;
		this.atores = [];
	}

	Reproduzir() {
		console.log("Reproduzindo...")
	}

	Pausar() {
		console.log("Pausado ||")
	}

	Avancar() {
		console.log("Avançar >>")
	}

	Fechar() {
		console.log("Fechar x")
	}
	
	Ficha() {
		console.log("Título: " + this.titulo)
		console.log("Ano de Lançamento: " + this.ano)
		console.log("Gênero: " + this.genero)
	}
}

var vingadores = new Filme("Vingadores 3", 2014, "Ação", "Fulano", "2h");

vingadores.Ficha();

/*vingadores.titulo = "Vingadores 3"
vingadores.ano = "2014"*/

console.log(vingadores.titulo);
console.log(vingadores.ano);

vingadores.Reproduzir();

var hulk = new Filme();

hulk.Pausar();

var starWars = new Filme();

starWars.Pausar();
starWars.Avancar();
starWars.Reproduzir();

