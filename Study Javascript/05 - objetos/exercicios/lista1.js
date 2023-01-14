/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. */

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
 

    console.log(`A marca do carro é ${this.marca}, a cor dele é ${this.cor} e seu gasto médio de combustível por KM rodado é: `)
  }

  calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  } 
}

const etios = new Carro('Toyota', 'prata', 1/12);
console.log(etios.calcularGastoPercurso(70, 5));

const corola = new Carro('Toyota', 'preto', 1/10);
console.log(corola.calcularGastoPercurso(70, 5));