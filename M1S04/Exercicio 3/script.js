
const funcaoNomeCompleto = () => {
    let nome = document.getElementById("text1")
    let sobrenome = document.getElementById("text2")
    document.getElementById("nomeCompleto").innerText = `Nome completo: ${nome.value} ${sobrenome.value}`

    console.log(`${nome.value} ${sobrenome.value}`)
}

