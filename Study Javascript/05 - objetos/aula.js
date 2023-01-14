

const pessoa = {
  nome: 'Lucas Nascimento',
  idade: 20,
  altura: 1.80,

  descrever: function () {
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`)
  }
}

console.log(pessoa);