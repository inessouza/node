// Programação Assíncrona - Callback
function enviarEmail(corpo, para, callback) {
	setTimeout(() => {
		console.log(`
			Para: ${para}
			---------------------------
			${corpo}
			---------------------------
			De: Inês Souza
		`)
		callback()

	}, 8000)
}

console.log("Início do envio do Email")
enviarEmail("Oi, seja bem vinda", "fulana@gmail.com", () => {
	console.log("Seu e-mail foi enviado!")
	console.log("TUDO OK!!!")
})