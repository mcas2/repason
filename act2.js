// Pide un texto y luego muestra el número de vocales que contiene.
const sc = require("prompt-sync")({ sigint: true })

const frase = sc("Introduce una frase y contaré las vocales => ")
const vocales = "aeiouAEIOU"

let vocalesTotales = 0

for (let i = 0; i < vocales.length; i++) {
    for (let j = 0; j < frase.length; j++) {
        if (vocales.charAt(i) === frase.charAt(j)){
            vocalesTotales = vocalesTotales + 1 
        }
    }
}

console.log('Las vocales totales son ' + vocalesTotales);

