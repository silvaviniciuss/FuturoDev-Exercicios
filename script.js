const exercicios = [
    {
        titulo: "m1s04",
        url: "M1S04/index.html"
    },
]

const listaExercicios = document.querySelector("#lista-exercicios")

exercicios.map((exercicio)=>{
    listaExercicios.innerHTML +=
    `<div id="exercicios">
        <h2><a href="${exercicio.url}">${exercicio.titulo}</a></h2>
    </div>`
})
