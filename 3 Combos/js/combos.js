let DivCombos = document.querySelector(".listaCombos");

fetch("combos.json").then((response) => {
  response.json().then((dados) => {
    dados.listaCombos.map((pedidos) => {
     DivCombos.innerHTML += `
        <div class="colunacom">
            <div>
                <h3 class="nomecom">${pedidos.nome}</h3>
                <p class="lanchescom">${pedidos.lanches}</p>
                <p class="descricaocom">${pedidos.descricao}</p>
            </div>
            <div>
            <p class="precocom">${pedidos.preco}</p>
            </div>
        </div>
        `;
    });
  });
});
