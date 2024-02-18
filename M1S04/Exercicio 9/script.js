const mudarTexto = () => {
    const select = document.querySelector("#list")
    const resultado = document.getElementById("resultado")

    const valor = select.options[select.selectedIndex].value

    switch (valor) {
        case "html":
            resultado.innerText = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores"
            break
        case "css":
            resultado.innerText = "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>"
            break
    }

}

