document.addEventListener("DOMContentLoaded", function() {
    // Método Simples
    const titulo = document.createElement("h1");
    titulo.id = "titulo";
    titulo.innerText = "Bem-vindo à Loja Virtual";
    document.body.appendChild(titulo);

    // Método Complexo
    const produto = document.createElement("div");
    produto.innerHTML = `
        <h2 id="nome-produto">Câmera Digital</h2>
        <p id="descricao-produto">Explore o mundo da fotografia com a nova Câmera XYZ, perfeita para capturar seus momentos mais especiais.</p>
        <p id="preco-produto">Preço: R$ 1200,00</p>
        <img src="câmera.jpg" alt="Imagem da Câmera Digital" style="width: 200px;">
    `;
    document.body.appendChild(produto);
});
