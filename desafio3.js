/*## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )


além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */
class heroes{
  constructor(heroName,heroAge,heroClass){
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.heroClass = heroClass
  }
  attack(attackType){
    if (this.heroClass === "mage"){
      return attackType = "usando magia"
    }
    else if (this.heroClass === "warrior"){
      return attackType = "usando espada"
    }
    else if (this.heroClass === "monk"){
      return attackType = "usando artes marciais"
    }
    else if (this.heroClass === "ninja"){
      return attackType = "usando shuriken"
    }
  }
}

let players = [
  {
    playerName: "Noire",
    playerAge: 18,
    playerClass: "warrior",
  },
  {
    playerName: "Vert",
    playerAge: 20,
    playerClass: "mage",
  },
  {
    playerName: "Blanc",
    playerAge: 18,
    playerClass: "monk",
  },
  {
    playerName: "Neptunia",
    playerAge: 19,
    playerClass: "ninja",
  }
]

let battleTurns = players.map(p => new heroes(p.playerName, p.playerAge, p.playerClass));
for (const hero of battleTurns) {
  console.log(`A ${hero.heroClass} (${hero.heroName}) atacou ${hero.attack()}`);
}