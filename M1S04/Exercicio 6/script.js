
const pessoas = [
    {
        nome: "João",
        idade: 32,
        nacionalidade: "Brasileira",
        profissao: "Instrutor"
    },
    {
        nome: "Maria",
        idade: 56,
        nacionalidade: "Brasileira",
        profissao: "Constureira"
    },
    {
        nome: "José",
        idade: 86,
        nacionalidade: "Brasileira",
        profissao: "Entregador"
    }
]


pessoas.map((pessoa)=>{
    console.log(`
    Nome: ${pessoa.nome}
    Idade: ${pessoa.idade}
    Nacionalidade: ${pessoa.nacionalidade}
    Profissão: ${pessoa.profissao}
    `)
})

const conteudo = document.querySelector("#conteudo")

pessoas.map((pessoa)=>{
    conteudo.innerHTML += 
    `<div>
        <ul>
            <li>Nome: ${pessoa.nome}</li>
            <li>Idade: ${pessoa.idade}</li>
            <li>Nacionalidade: ${pessoa.nacionalidade}</li>
            <li>Profissão: ${pessoa.profissao}</li>
        </ul>
    </div>`
})
