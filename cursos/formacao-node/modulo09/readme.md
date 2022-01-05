<h2>Módulo 9 - Orientação a objetos com JavaScript</h2>

<h6>Classificação</h6>

<p>A classificação tem o objetivo de observar um grupo de objetos e classifica-los em grupos conforme caracteristicas em comum.</p>

<h6>Abstração</h6>

<p>Abstração também pode ser entendida como simplificação. É o ato de definir atributos e métodos de uma entidade. São aspectos essenciais de um contexto qualquer. A abstração pode variar conforme o contexto, por isso devemos sempre observar a realidade da entidade e extrair dela somente o que for necessário.</p>


<h6>Como construir uma classe no JavaScript</h6>

``
class Filme {
	constructor() {
		this.titulo = '';
		this.ano = 2000;
		this.genero = '';
		this.diretor = '';
		this.atores = [];
		this.duracao = 0;
	}

	Reproduzir() {
		console.log("Reproduzindo...")
	}

	Pausar() {
		console.log("Pausadpo ||")
	}

	Avancar() {
		console.log("Avançar >>")
	}

	Fechar() {
		console.log("Fechar x")
	}
}
``

<h6>Objeto</h6>

<p>Objetos são realizações de classe, algo concreto que tiramos de uma classe</p>
 
<h6>Atributos</h6>

Atributos são caracteristicas de um objeto.

<h6>Métodos</h6>

Métodos são ações que podem ser executadas por um objeto.

<h6>Herança</h6>

<p>Quando uma classe herda todas as caracteristicas de outra classe.</p>
