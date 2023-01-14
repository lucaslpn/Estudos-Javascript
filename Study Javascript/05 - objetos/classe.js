

class Pessoa {

  nome;
  idade;
  altura;
  anoDeNascimento;

  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.anoDeNascimento = 2023 - idade;
  } 

  descrever() {
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`)
  }
}

const lucas = new Pessoa('Lucas', 20, 1.80);
const gabi = new Pessoa('Gabi', 22, 1.60);

console.log(lucas);
console.log(gabi);

/* function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
  }
} 

const lucas = new Pessoa('Lucas', 20);
const gabi = new Pessoa('Gabi', 22);

compararPessoas(lucas, gabi); */