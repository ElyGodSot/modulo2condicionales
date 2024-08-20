//ejercicio 1
let belleza=(prompt("¿Eres bella?"));
if(belleza=="si"){
    console.log("Ciertamente");
}else{
    console.log("No te creo");
}
//ejercicio 2
let numero = Number(prompt("Dame un numero"));
let numero2 = numero%2
if (numero2==0){
    console.log("Numero divisible entre 2");
}else{
    console.log("Numero no divisible entre 2");
}
//ejercicio 3
let numero3 = Number(prompt("Dame un numero"));
let numero4 = numero3%2
if (numero4==0){
    alert("Numero par");
}else{
    alert("Numero impar");
}
//ejercicio 4
let cliente = prompt("dime tu numero de cliente");
if(cliente == 1000){
    console.log("felicidades, ganaste");
}else{
    console.log("lo siento cliente "+ cliente +" sigue participando");
}
//ejercicio  5
let numero5 = Number(prompt("Dame un numero"));
let numero6 = Number(prompt("Dame otro un numero diferente"));

if (numero5>numero6){
    console.log("el "+numero6+" es menor");
}else{
    console.log("el "+numero5+" es menor");
}
//ejercicio 6

let a = Number(prompt("Dame un numero"));
let b = Number(prompt("Dame otro un numero diferente"));
let c = Number(prompt("Dame otro un numero diferente"));

if (a>b&&a>c){
    console.log("el "+a+" es el mayor");
} else if (b>a&&b>c) {
   console.log("el "+b+" es el mayor");
} else if (c>a&&c>b){
  console.log("el "+c+" es el mayor");
}else {
console.log("al menos dos numeros son iguales");
}
//ejercicio 7