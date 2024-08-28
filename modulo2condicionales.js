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

let dia = prompt ("que dia de la semana es").toLocaleLowerCase();
if(dia === "lunes"){

    console.log("ten un buen inicio de semana");

} else if (dia === "viernes"){

    console.log("ya casi es fin de semana");
} else {
    console.log("feliz "+(dia));
}
//ejercicio 8



let calificacion = Number(prompt ("Que calificacion sacaste?"));

if(calificacion > 10){

    console.log("Error");

} else if (calificacion >=9 && calificacion<=10){

    console.log("Excelente");
} else if (calificacion >=8 && calificacion<9){

    console.log("bien");
} else if (calificacion >=7 && calificacion<6){

    console.log("puedes mejorar");
} else if (calificacion >=6 && calificacion<7){

    console.log("apenitas");
} else {
    console.log("te ira mejor a la proxima");
}
//ejercicio 9
let topping = prompt("Quieres topping? s/n");
if(topping=="n"){
    console.log("tu helado cuesta $50")
}else{
    let sabor =prompt("de que sabor? oreo/kitkat/brownie")
    if(sabor=="oreo"){
        console.log("tu helado cuesta $60")
    }else if (sabor=="kitkat"){
        console.log("tu helado cuesta $65")
    }else if(sabor=="brownie"){
        console.log("tu helado cuesta $70")
    }else{
        console.log("no tenemos ese topping disponible");
        console.log("serian $50")
    }
}
//ejercicio 10
let nivel = prompt("Que nivel le interesa? curso/carrera/master");
let descuento = prompt("cuenta con algun descuento? facebook/google/jesua");
let meses=1
if(nivel=="curso"){nivel=4999 
  meses=2}
else if(nivel=="carrera"){nivel=3999 
  meses= 6}
else if(nivel=="master"){nivel=2999 
  meses=12}
if(descuento=="facebook"){descuento=.8}
else if(descuento=="google"){descuento=.85}
else if(descuento=="jesua"){descuento=.5}

let preciomensual= nivel*descuento
let preciototal=preciomensual*meses
console.log("tu precio mensual con el descuento es de "+preciomensual);
console.log("estarias pagando un total de "+preciototal);

//ejercicio11



let distancia = Number(prompt ("distancia?"));
let litros = Number (prompt ("litros?"));
let vehiculo =prompt("que vehiculo conduces? carro/moto/autobus").toLocaleLowerCase();

if(vehiculo=="carro" && litros<100){
    let precio=distancia*.2+5
    console.log("el precio es $"+precio);
} else if (vehiculo=="carro" && litros>100){
    let precio=distancia*.2+10
    console.log("el precio es $"+precio);
}else if (vehiculo=="moto" && litros<100){
    let precio=distancia*.1+5
    console.log("el precio es $"+precio);
}else if (vehiculo=="moto" && litros>100){
    let precio=distancia*.1+10
    console.log("el precio es $"+precio);
}else if (vehiculo=="autobus" && litros<100){
    let precio=distancia*.5+5
    console.log("el precio es $"+precio);
}else if (vehiculo=="autobus" && litros>100){
    let precio=distancia*.5+10
    console.log("el precio es $"+precio);
}else{
    console.log("opcion no disponible");
}
