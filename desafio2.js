let victoriesNumber = 84,
defeatsNumber = 17,
winRate = calculateWinRate(victoriesNumber, defeatsNumber),
levelRank = calculateLevelRank(winRate);

function calculateWinRate(victories, defeats) {
    return (victories - defeats)
}

function calculateLevelRank(winRate) {
    if (winRate <= 10) {
        return "Ferro";
    } else if (winRate >= 11 && winRate <= 20) {
        return "Bronze";
    } else if (winRate >= 21 && winRate <= 50) {
        return "Prata";
    } else if (winRate >= 51 && winRate <= 80) {
        return "Ouro";
    } else if (winRate >= 81 && winRate <= 90) {
        return "Diamante";
    } else if (winRate >= 91 && winRate <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

console.log(`O Herói tem saldo de ${winRate} está no nível de ${levelRank}.`);