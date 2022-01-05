var nome = "Ines" // Global
let nome2 = "Maria" // Global

// Global: Pode ser acessada por todo o programa
// Local: Só pode ser usado na função onde foi declarado.

// VAR: tem apenas dois escopos: Global e Local.
// LET: tem também os escopos Global e Local mais o escopo de Bloco.

function func1() {
	var sobrenome = "Souza" // Local
	let sobrenome2 = "Silva" // Local
	console.log("Oi" + nome + " " + sobrenome)
	console.log("Oi" + nome2 + " " + sobrenome2)
}

function func2() {
	console.log("Olá" + nome)
}

func1()
func2()
console.log(nome)
console.log(nome2)
console.log("============================")

var a = 10 // Global
let testar = true;

if (testar) {
	var b = 20;
	console.log(a + b)
}

console.log(a + b); 
