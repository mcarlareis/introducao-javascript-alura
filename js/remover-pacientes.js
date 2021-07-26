var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    var confirmacao = confirm("Você deseja excluir esse paciente?");
    if (confirmacao) {
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function () {
            event.target.parentNode.remove();
        }, 500);

    }
});