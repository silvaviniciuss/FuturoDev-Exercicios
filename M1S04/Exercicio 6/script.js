const joao = {
    nome: "João",
    idade: 32,
    nacionalidade: "Brasileira",
    profissao: "Instrutor"
}

const maria = {
    nome: "Maria",
    idade: 56,
    nacionalidade: "Brasileira",
    profissao: "Constureira"
}

const jose = {
    nome: "José",
    idade: 86,
    nacionalidade: "Brasileira",
    profissao: "Entregador"
}


const informações = (objeto) => {
    console.log(`
    Nome: ${objeto.nome}
    Idade: ${objeto.idade}
    Nacionalidade: ${objeto.nacionalidade}
    Profissão: ${objeto.profissao}
    `)
}

const dados = (objeto) => {
    let lista = document.querySelector("#lista")
    const nome = document.createElement('li')
    const idade = document.createElement('li')
    const nacionalidade = document.createElement('li')
    const profissao = document.createElement('li')
    
    nome.innerText = `Nome: ${objeto.nome}`
    idade.innerHTML = `Idade: ${objeto.idade}`
    nacionalidade.innerHTML = `Nacionalidade: ${objeto.nacionalidade}`
    profissao.innerHTML = `Profissão: ${objeto.profissao}`

    lista.appendChild(nome)
    lista.appendChild(idade)
    lista.appendChild(nacionalidade)
    lista.appendChild(profissao)

}


informações(joao)
informações(maria)
informações(jose)

dados(joao)