/* 
Tipagem
Tipos primitivos
- number: Número inteiro, decimal.
- string: Texto, caracteres.
- boolean: Verdadeiro/Falso.
*/


let age:number = 25
let color: string = 'black';
let isAlive: boolean = true;

//interferencias de tipos 

let a = 1
let b = 'c'

//Parâmetros e retornos de funções
function addNumber(a:number,b:number):number{
    const res = a + b
    return res
}
console.log(addNumber(3,4)) 

//Função com retorno opcional
function geeting(fullName: string): string | void {
   if(fullName) {
       return `Hello ${fullName}`
   }
}
console.log(geeting("Dalio Shindi Yamada"))// Hello Dalio Shindi Yamada

//Função com parâmetros opcionais
function stringOrNumberSize(value: string | number): number {
    if (typeof value === "number") {
        return value
    }
    return value.length
}
console.log(stringOrNumberSize('Olá Dev'))//7
console.log(stringOrNumberSize(10))//10