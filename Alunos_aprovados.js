var NOTAS = [8.0,7.0,8.3,9.0,4.5,6.0,3.7,5.0,7.1,9.5,6.0]
var aprovado = (nota) => nota>6;
var notasAprovadas = NOTAS.filter(aprovado);
console.log(notasAprovadas);