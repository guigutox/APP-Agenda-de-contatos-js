


document.getElementById("form-contact").addEventListener("submit", function(event){
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("tel").value;


    const data = {
        nome: nome,
        email: email,
        telefone: telefone
    }
    const url = 'http://localhost:8080/agenda';

    axios.post(url, data,{
    }).then(response => {
        console.log("Funcionou: ", response);
    }).catch( error => {
        console.log("DEU ERRO: ", error);
    })

})



