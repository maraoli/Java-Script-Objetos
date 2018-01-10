// MODO 1
var clientes = [];

function cadastrarCliente1(){
    event.preventDefault();

    // puxar os dados html para var locais js
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;

    //Setar dados do objeto
    var cli = new Object();
        cli.nome = nome;
        cli.idade = idade;

        clientes.push(cli);

    //limpar dados setados:
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';

    // print
    console.log(clientes);
}

// MODO 2:
var clientes = [];

function cadastrarCliente2(){
    event.preventDefault();

    // puxar os dados html para var locais js
    var objNome = document.getElementById('nome').value;
    var objIdade = document.getElementById('idade').value;

    //Setar dados do objeto
    var cli = new Object();
        cli.nome = objNome;
        cli.idade = objIdade;

        clientes.push(cli);
    
    //limpar dados setados:
    objNome.value = '';
    objIdade.value = '';

    // print
    console.log(clientes);
}