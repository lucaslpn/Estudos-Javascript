/* 

1. Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semeestre;
*/

const nota1 = 8;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));

if (media < 5) {
  console.log('Reprovação');
} else if (media >=5 && media <=7) {
  console.log('Recuperação');
} else {
  console.log('Paassou de semestre!')
}