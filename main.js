document.getElementById("content").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    let campoA = Number(document.getElementById("campoA").value);
    let campoB = Number(document.getElementById("campoB").value);
    let mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = ` Formulário válido! O número ${campoB} é maior que o número ${campoA}.`;
        mensagem.style.color = "green"; // Define cor de sucesso
    } else {
        mensagem.textContent = ` Erro: O número ${campoB} não é maior que o número ${campoA}.`;
        mensagem.style.color = "red"; // Define cor de erro
    }

    mensagem.style.display = "block"; // Garante que a mensagem apareça
});
