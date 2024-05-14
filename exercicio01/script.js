
const paises = ["Albânia", "Bolívia","Canadá", "Dinamarca", "Etiópia", "Finlândia", "Alemanha","Hungria", "Irlanda", "Japão", "Quênia"];

for ( let i = 0; 0 <= paises.length; i++){
    console.log(paises[i++]);
}


const paisesLength = paises.length;
const addPortugal = paises.push("Portugal");

function ultimosTres () {
    const ultimos = paises.slice((paises.length - 3), (paises.length + 1));
    console.log(ultimos);
}



const tudoJunto = paises.join("-")