const funcaoCumprimentar = () => {
    
    let hora = document.querySelector("#hora").value
    let resultado = document.querySelector("#resultado")

    if (hora >= 0 && hora <= 12) {
        resultado.innerHTML = "BOM DIA"
        console.log("BOM DIA")
    } else if (hora > 12 && hora <= 18) {
        resultado.innerHTML = "BOA TARDE"
        console.log("BOA TARDE")
    } else {
        resultado.innerHTML = "BOA NOITE"
        console.log("BOA NOITE")
    }
}

// funcaoCumprimentar(13)
// funcaoCumprimentar(6)
// funcaoCumprimentar(22)