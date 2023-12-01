function login(){

const usuarioLogado = "nra@gmail"
const senhaUsuarioLogado = "nicolas"

const usuario = document.querySelector("#usuario").value
const senha = document.querySelector("#senha").value

if (usuario != "" && senha != "") {
    if (usuario == usuarioLogado && senha == senhaUsuarioLogado) {
        document.querySelector("#texto").innerText = "Bem-vindo a meu Projeto JS"
}else {
    document.querySelector("#texto").innerText = "Usuário incorreto"
}

}else {
    document.querySelector("#texto").innerText = "Preencha todos os campos"
}
}
