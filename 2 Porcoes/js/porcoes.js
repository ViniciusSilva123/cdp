let divPorcoes = document.querySelector(".listaPorcoes");

fetch("porcoes.json").then((response) => {
  response.json().then((dados) => {
    dados.listaPorcoes.map((porcoes) => {
      divPorcoes.innerHTML += `
        <div class="coluna">
            <div class="detalhes">
                <h3 class="nome">${porcoes.nome}</h3>
                <p class="descricao">${porcoes.descricao}</p>
            </div>
            <div>
            <p class="preco">${porcoes.preco}</p>
            </div>
        </div>
        `;
    });
  });
});
