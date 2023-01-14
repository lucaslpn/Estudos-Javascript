/* Problemas de Lógica Matemática e Computacional

1. Faça um programa para calcular o valor gasto de combustíveel em uma viagem.

Você terá três variáveis. Sendo elas:

- valor gasto de combustívem em uma viagem;
- gasto médio de combustível do carro por KM;
- distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

const precoCombustivel = 6.40;
const kmPorLitros = 9;
const distanciaEmKm = 240;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2))  
