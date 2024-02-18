const identificar = () => {
    const numero = document.getElementById("numero").value
    const resultado = document.getElementById("resultado")
    if (numero > 0) {
        resultado.innerHTML = "POSITIVO"
        resultado.setAttribute("class", "blue")
        console.log("POSITIVO")
    } else if ( numero < 0) {
        resultado.innerHTML = "NEGATIVO"
        resultado.setAttribute("class", "red")
        console.log("NEGATIVO")
    } else {
        resultado.innerHTML = "IGUAL A ZERO"
        resultado.setAttribute("class", "zero")
        console.log("IGUAL A ZERO")
    }

}