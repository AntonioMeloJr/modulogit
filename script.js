
entrada = 13
let resultado = fizzBuzz(entrada);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return "Não é um número";

    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return "Fizz Buzz"
    }
    else if (entrada % 3 === 0) {
    return " fizz "
}
     else if (entrada % 5 === 0){
         return "Buzz"
     }
     else 
     return entrada
}

console.log(resultado)

// reverse a string

let newStr = " ";

function reverserAString(str) {
    for( let i = str.length -1; i >=0; i--){
        newStr += str[i];
    }
    console.log(newStr);
}

let resultado2 = reverserAString("Olá mundo")

// converst celsius to fahrenheit

function celciusToFahrenheit(x){

    if (typeof x != "number"){
    return "Não é um número"
}
    var F = ( x * (9 / 5)) + 32
    console.log(`O valor de Fahrenheit é ${F}`)
}

celciusToFahrenheit(10)
