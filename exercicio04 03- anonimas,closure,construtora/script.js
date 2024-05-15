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
  