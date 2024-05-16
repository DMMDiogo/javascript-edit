const primeiraFuncao = function () {
    console.log("Isto foi demasiado rápido");
};

primeiraFuncao();

function form(nomeCampo) {
    return function (dado) {
      return console.log("Nome:" + " " + dado);
     
    };
    
  }

  const campoNome = form("Nome");
  campoNome("Diogo");


function produto(nome, preço){
  this.nome = nome;
  this.preço = preço;
}

const aspirador = new produto("Aspirador", 8);

console.log(aspirador);

aspirador.preço = 5;

console.log (aspirador);



  