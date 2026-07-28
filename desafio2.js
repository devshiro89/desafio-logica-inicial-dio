//Declaração das variáveis de vitórias e derrotas do herói
let victoriesNumber = 84,
defeatsNumber = 17;

//Função para calcular a taxa de vitórias do herói
function calculateWinRate(victories, defeats) {
    return (victories - defeats)
}
let winRate = calculateWinRate(victoriesNumber, defeatsNumber);

//Função para calcular o nível do herói com base na taxa de vitórias
function calculateLevelRank(winRate) {
    switch (true) {
        case winRate <= 10:
            return "Ferro";
        case (winRate >= 11 && winRate <= 20):
            return "Bronze";
        case (winRate >= 21 && winRate <= 50):
            return "Prata";
        case (winRate >= 51 && winRate <= 80):
            return "Ouro";
        case (winRate >= 81 && winRate <= 90):
            return "Diamante";
        case (winRate >= 91 && winRate <= 100):
            return "Lendário";
        default:
            return "Imortal";
    }
}
let levelRank = calculateLevelRank(winRate);

//Exibe a mensagem final com o saldo de vitórias e o nível do herói
console.log(`O Herói tem saldo de ${winRate} está no nível de ${levelRank}.`);