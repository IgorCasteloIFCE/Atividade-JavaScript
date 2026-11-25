const modal = document.querySelector(".modal")
const modalContent = document.querySelector(".modal-content")

function closeModal(){
    modal.style.display = "none"
}

function primeira(){
    modal.style.display = "flex"
    modalContent.innerHTML = ""

    const questao01 = document.createElement("div");
    const perguntaNome = document.createElement("input");
    perguntaNome.type = "text";
    perguntaNome.placeholder = "Digite seu Nome"

    const perguntaIdade = document.createElement("input");
    perguntaIdade.type = "number";
    perguntaIdade.placeholder = "Digite sua Idade"

    const perguntaAltura = document.createElement("input");
    perguntaAltura.type = "number";
    perguntaAltura.step = "0.01"
    perguntaAltura.placeholder = "Digite sua Altura (cm)"

    const mostrar = document.createElement("button");
    mostrar.textContent = "Mostrar Dados";

    const resultado = document.createElement("p")

    mostrar.onclick = () => {
        const nome = perguntaNome.value
        const idade = perguntaIdade.value
        const altura = perguntaAltura.value

        resultado.textContent = `Meu nome é ${nome}, tenho ${idade} anos e meço ${altura}cm.`
    }

    questao01.append(perguntaNome, perguntaIdade, perguntaAltura, mostrar, resultado)
    modalContent.appendChild(questao01);

}