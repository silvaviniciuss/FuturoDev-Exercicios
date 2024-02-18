const funcaoSomar = () => {
    const numero1 = document.getElementById("numero1").value
    const numero2 = document.getElementById("numero2").value
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = `Resultado: ${Number(numero1) + Number(numero2)}`

    console.log(`Resultado: ${Number(numero1) + Number(numero2)}`)

}
