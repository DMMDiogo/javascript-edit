function descontos (preco, desconto) {
    if (desconto < 10 ) {
        let dezPorcento = preco + desconto;
        console.log(dezPorcento);
        return dezPorcento;
        
    }

    else if (desconto >10 && desconto < 30) {

        let acimaDez = preco - desconto;
        console.log(acimaDez);
        return acimaDez;
       

    }

    else if ( desconto == 0) {
        let semDesconto = preco * 2;
        console.log(semDesconto);
        return semDesconto;
        
    }
}