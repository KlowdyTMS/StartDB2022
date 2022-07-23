const readline = require('readline-sync');
const Forca = require('./forca');

const jogo = new Forca('Abacaxi');

while (!['perdeu', 'ganhou'].includes(jogo.buscarEstado())) {
  const chute = readline.question('Aguardando chute: \n');
  jogo.chutar(chute);
  console.log(jogo.buscarDadosDoJogo());
}

console.log(`Você ${jogo.buscarEstado()}!`);
