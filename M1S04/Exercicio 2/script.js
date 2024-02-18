
const funcaoEscolherNumero = () => {
    let variavel = window.prompt("Digite um número: ")
    
    while(isNaN(variavel)) {
        alert("Você não digitou um número")
        variavel = window.prompt("Digite um número: ")
    }
    
    alert(`Parabéns você digitou o número ${variavel}`)
    console.log(variavel)

}

