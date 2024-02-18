const funcaoMensagem = () => {
    const mensagem = document.getElementById("exercicio1")
    console.log((mensagem.value).toUpperCase())
    alert(`${mensagem.value.toUpperCase()}`)
    mensagem.value = " "
}

