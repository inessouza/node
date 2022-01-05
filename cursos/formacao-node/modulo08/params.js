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
		callback("OK", 5, "8s")

	}, 8000)
}

console.log("Início do envio do Email")
enviarEmail("Oi, seja bem vinda", "fulana@gmail.com", (status, amount, time) => {
	console.log(`
		Status: ${status}
		-----------------
		Contatos: ${amount}
		-----------------
		Tempo de Envio: ${time}
	`)
	console.log("TUDO OK!!!")
})