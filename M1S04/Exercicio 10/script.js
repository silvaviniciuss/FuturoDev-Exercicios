const funcaoIdade = () => {
    let idade = window.prompt("Qual é sua Idade? ")
    const resultado = document.querySelector("#resultado")

    while(isNaN(idade)) {
        idade = prompt("Digite sua idade: ")
        
    }
    if(idade <= 18) {
        resultado.innerHTML = "Menor de Idade"
        console.log("Menor de Idade")
    } else {
        resultado.innerHTML = "Maior de Idade"
        console.log("Maior de Idade")
    }

}

