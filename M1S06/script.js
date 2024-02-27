alert("Bem Vindo Ao Perfil do Usuário")

const usuario = {
    nome: "Vinicius da Silva",
    img: "https://scontent.fpoa5-1.fna.fbcdn.net/v/t1.6435-1/174458489_10215084316580675_5733764496050605015_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=o2lbAakGh6gAX8-S_uO&_nc_ht=scontent.fpoa5-1.fna&oh=00_AfCyta9Xxm-GjOAtUr60Wo6AnhbidrJhywXpX8F2lnttYg&oe=660599EE",
}

const nome = document.querySelector("h3")
nome.innerHTML = usuario.nome
const imagem = document.querySelector("img")
imagem.src = usuario.img