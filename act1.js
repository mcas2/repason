const input = require("prompt-sync")({ sigint: true })

console.log("1º - Introduce dos números:")
const a = input("Primer número => ")
const b = input("Segundo número => ")

const n1 = 6
const n2 = 5

console.log(sumarNumeros(a, b))
console.log("___________________")
console.log(sumarNumeros(n1, n2))


function sumarNumeros(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
        return "Introduce números correctos"
    } else {
        return Number(num1) + Number(num2)
    }
}