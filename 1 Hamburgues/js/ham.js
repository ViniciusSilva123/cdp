let divHambur = document.querySelector(".listaHambur");

fetch("ham.json").then((response) => {
  response.json().then((dados) => {
    dados.listaHambur.map((Hambur) => {
      divHambur.innerHTML += `
        <div class="coluna">
            <div>
                <h3 class="nome">${Hambur.nome}</h3>
                <p class="descricao">${Hambur.descricao}</p>
            </div>
            <div>
            <p class="preco">${Hambur.preco}</p>
            </div>
        </div>
        `;
    });
  });
});
