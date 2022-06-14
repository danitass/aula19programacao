const pessoa = [
   {
       altura:1.78,
       sexo:"M"
   },
   {
       altura:1.60,
       sexo:"F"
   },
   {
       altura:1.65,
       sexo:"F"
   },
   {
       altura:1.88,
       sexo:"M"
   },
   {
       altura:1.70,
       sexo:"M"
   },
   {
       altura:1.73,
       sexo:"F"
   },
   {
       altura:1.65,
       sexo:"M"
   },
   {
       altura:1.70,
       sexo:"F"
   },
   {
       altura:1.71,
       sexo:"M"
   },
   {
       altura:1.83,
       sexo:"M"
   }
];

function maxMin(h){
   let maior=0, menor=5;
   let quantidadeHomens = 0;
   let quantidadeMulheres = 0;
   let somaMulheres = 0;
   for(let x=0;x<h.length;x++){
       if (h[x].altura>maior){
           maior = h[x].altura;
       }else if(h[x].altura<menor){
           menor = h[x].altura;
       }
       if (h[x].sexo == "M") {
           quantidadeHomens++
       }
       else {
           quantidadeMulheres++
           somaMulheres = somaMulheres + h[x].altura 
       }

   }
   console.log("A maior altura é "+ maior+" e a menor é "+menor);
   console.log("A quantidade de homens é de " + quantidadeHomens);
   console.log("A média da altura das mulheres é de " + somaMulheres/quantidadeMulheres)
}
maxMin(pessoa)
