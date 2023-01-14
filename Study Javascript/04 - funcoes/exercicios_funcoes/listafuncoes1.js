
function escrevaMeuNome(nome) {
  return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Lucas') + ', sou de maior');
  } else {
    console.log(escrevaMeuNome('Lucas') + ', sou de menor');
  }
}

verificarIdade(17);