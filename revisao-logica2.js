function testar(){

    // exibe uma caixa de texto dizendo o que está dentro do alert.
    // alert('funcionando');
    
    
    event.preventDefault();

    /*retorna : <input type="text" id="name" placeholder="Seu nome aqui">*/
    var nome = document.getElementById('nome');
    console.log(nome);

    // Retorna o valor de entrada do input
    var nome = document.getElementById('nome').value;
    console.log(nome);

    var idade = document.getElementById('idade').value;

    var resultado;
    if(idade >= 18){
        resultado = "Maior de Idade";
    }
    else{
        resultado = "Menor de Idade";
    }
    console.log(resultado);

    // Esse abaixo n fununcia :(
    // document.getElementById('resultado').text;
    // /*O .text significa que o id do html */

    // MODO 1
    document.getElementById('resultado').innerHTML = resultado;
    // /* O .innerHTML serve para pegar o valor de entrada de campos html
    //     O igual seta o valor para a função resultado

    //MODO 2
    document.getElementById('resultado').innerHTML = "<p>"+resultado+"<p>";

    // NÃO SEI PRA QUE SERVE ISSO ABAIXO :(
    var txt = "";
    txt += "<p class='paragrafo'>";
    txt += resultado;
    txt += "<p>";
        
    //Criando um objeto:
        // MODO 1
        var cli = {};
        // MODO 2
        var cli = new Object();

    // Setando seus valores
    cli.nome = nome;
    cli.idade = idade;

    // Exibindo os valores do objeto
    console.log(cli);
}