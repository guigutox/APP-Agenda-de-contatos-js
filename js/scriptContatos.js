

    const nomeCampo = document.getElementById("nomeResultado");
    const telCampo = document.getElementById("telResultado");
    const emailCampo = document.getElementById("emailResultado");
    const erroCampo = document.getElementById("erro");

    document.getElementById("submit-button").addEventListener("click", function() {
        console.log("Clickou");

        const telefone = document.getElementById("telefone").value;
        const url = 'http://localhost:8080/contatos/' + telefone;


        axios.get(url)
            .then(function(response) {
               
                const resposta = response.data.data;
                nomeCampo.innerHTML = resposta.nome;
                telCampo.innerHTML = resposta.telefone;
                emailCampo.innerHTML = resposta.email;
            

            })
            .catch(function(error) {
                console.error('Erro ao fazer a requisição:', error);
                erroCampo.innerHTML = "Numero não encontrado";
            });
    });