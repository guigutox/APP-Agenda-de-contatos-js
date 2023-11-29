document.addEventListener("DOMContentLoaded", function () {
  const url = "http://localhost:8080/contatos";
  const tableBody = document.querySelector("#tabelaContatos tbody");

  axios
    .get(url)
    .then((response) => {
      const contatos = response.data;

      contatos.forEach((contato) => {
        const row = document.createElement("tr");
        console.log(contato.telefone);
        row.innerHTML = `
                    <td>${contato.nome}</td>
                    <td>${contato.telefone}</td>
                    <td>${contato.email}</td>
                    <td><button class="btn btn-danger" onclick="apagar('${contato.telefone}')" >Deletar</button></td>
                `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.log("DEU ERRO: ", error);
    });
});

function apagar(telefone) {
  const url = `http://localhost:8080/agenda/${telefone}`;

  axios
    .delete(url)
    .then((response) => {
      console.log("Contato excluído com sucesso!");
      location.reload();
    })
    .catch((error) => {
      console.log("Erro ao excluir contato: ", error);
    });
}
