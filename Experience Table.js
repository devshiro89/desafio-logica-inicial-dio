/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let playerName = "Noire",
rankedXP = 7568,
rankedLevel,
gender = "F";

//Condicional para definir o nível do herói com base na quantidade de XP
if (rankedXP < 1000) {
    rankedLevel = "Ferro";
} else if (rankedXP >= 1001 && rankedXP <= 2000) {
    rankedLevel = "Bronze";
}   else if (rankedXP >= 2001 && rankedXP <= 5000) {
    rankedLevel = "Prata";
}   else if (rankedXP >= 5001 && rankedXP <= 7000) {
    rankedLevel = "Ouro";
} else if (rankedXP >= 7001 && rankedXP <= 8000) {
    rankedLevel = "Platina";
}   else if (rankedXP >= 8001 && rankedXP <= 9000) {
    rankedLevel = "Ascendente";
}   else if (rankedXP >= 9001 && rankedXP <= 10000) {
    rankedLevel = "Imortal";
} else if (rankedXP >= 10001) {
    rankedLevel = "Radiante";
}


//Condicional para definir a mensagem de saída com base no gênero do herói
if (gender === "F") {
    console.log(`A Heroína de nome ${playerName} está no nível de ${rankedLevel}`)
}
else {
    console.log(`O Herói de nome ${playerName} está no nível de ${rankedLevel}`);
}
