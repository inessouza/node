// Programação Assíncrona
function enviarEmail(corpo, para) {
	setTimeout(() => {
		console.log(`
			Para: ${para}
			---------------------------
			${corpo}
			---------------------------
			De: Inês Souza
		`)

	}, 8000)
}

console.log("Início do envio do Email")
enviarEmail("Oi, seja bem vinda", "fulana@gmail.com")
console.log("Seu e-mail foi enviado, deve chegar em minutos.")
console.log("TUDO OK!!!")