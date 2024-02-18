const funcaoParOuImpar = () => {
    let numero = document.querySelector("#numero").value
    let resultado = document.querySelector("#resultado")

    if (numero % 2 === 0) {
        resultado.innerHTML = `O número ${numero} é PAR`
        console.log(`O número ${numero} é PAR`)
    } else {
        resultado.innerHTML = `O número ${numero} é ÍMPAR`
        console.log(`O número ${numero} é ÍMPAR`)
    }
}

funcaoParOuImpar(3)
funcaoParOuImpar(2)