class AbrigoAnimais {
  animaisDoAbrigo = [
    { nome: "Rex", especie: "cão", brinquedos: ["RATO", "BOLA"] },
    { nome: "Mimi", especie: "gato", brinquedos: ["BOLA", "LASER"] },
    { nome: "Fofo", especie: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
    { nome: "Zero", especie: "gato", brinquedos: ["RATO", "BOLA"] },
    { nome: "Bola", especie: "cão", brinquedos: ["CAIXA", "NOVELO"] },
    { nome: "Bebe", especie: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
    { nome: "Loco", especie: "jabuti", brinquedos: ["SKATE", "RATO"] },
  ];

  validarBrinquedos(brinquedos1) {
    const listaDeBrinquedos = [
      "RATO",
      "BOLA",
      "LASER",
      "CAIXA",
      "NOVELO",
      "SKATE",
    ];
    let brinquedosValidos = true;

    const brinquedosArray1 = brinquedos1.split(",");
    const brinquedosSetArray1 = [...new Set(brinquedosArray1)];

    const listasIguais = brinquedosArray1.length === brinquedosSetArray1.length;

    brinquedosArray1.forEach((item) =>
      listaDeBrinquedos.includes(item) ? "" : (brinquedosValidos = false)
    );

    if (!listasIguais || !brinquedosValidos) {
      return false;
    } else {
      return true;
    }
  }

  validarAnimais(ordemAnimaisArray) {
    const listaDeAnimais = [
      "Rex",
      "Mimi",
      "Fofo",
      "Zero",
      "Bola",
      "Bebe",
      "Loco",
    ];
    let animaisValidos = true;

    const animaisSetArray = [...new Set(ordemAnimaisArray)];

    const listasIguais = ordemAnimaisArray.length === animaisSetArray.length;

    ordemAnimaisArray.forEach((animal) =>
      listaDeAnimais.includes(animal) ? "" : (animaisValidos = false)
    );

    if (!listasIguais || !animaisValidos) {
      return false;
    } else {
      return true;
    }
  }

  checarOrdem(array1, array2) {
    let index = 0;
    for (let i = 0; i < array2.length; i++) {
      const itemParaAchar = array2[i];
      let itemAchado = false;
      for (let j = index; j < array1.length; j++) {
        if (array1[j] === itemParaAchar) {
          index = j + 1;
          itemAchado = true;
          break;
        }
      }
      if (!itemAchado) {
        return false;
      }
    }
    return true;
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const ordemAnimaisArray = ordemAnimais.split(",").sort();
    let listaFinal = [];

    const animaisValidos = this.validarAnimais(ordemAnimaisArray);
    const brinquedosValidos1 = this.validarBrinquedos(brinquedosPessoa1);
    const brinquedosValidos2 = this.validarBrinquedos(brinquedosPessoa2);

    if (!animaisValidos) return { erro: "Animal inválido" };
    if (!brinquedosValidos1 || !brinquedosValidos2)
      return { erro: "Brinquedo inválido" };

    for (let i = 0; i < ordemAnimaisArray.length; i++) {
      let pet = this.animaisDoAbrigo.find(
        (item) => item.nome === ordemAnimaisArray[i]
      );

      let pessoa1 = this.checarOrdem(
        brinquedosPessoa1.split(","),
        pet.brinquedos
      );
      let pessoa2 = this.checarOrdem(
        brinquedosPessoa2.split(","),
        pet.brinquedos
      );

      if (pessoa1 && pessoa2) listaFinal.push(`${pet.nome} - abrigo`);
      else if (!pessoa1 && !pessoa2) listaFinal.push(`${pet.nome} - abrigo`);
      else if (pessoa1 && !pessoa2) listaFinal.push(`${pet.nome} - pessoa 1`);
      else if (!pessoa1 && pessoa2) listaFinal.push(`${pet.nome} - pessoa 2`);
    }

    return { lista: [...listaFinal] };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
