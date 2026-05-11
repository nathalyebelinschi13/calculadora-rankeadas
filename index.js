// 1. Criamos a função que recebe vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    
    // 2. Calculamos o saldo (Vitórias menos Derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 3. Estrutura de decisão para definir o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // 4. Retornamos a mensagem final
    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// 5. Para testar, chamamos a função e exibimos no console
let resultado = calcularNivel(75, 20); // Exemplo: 75 vitórias e 20 derrotas
console.log(resultado);
