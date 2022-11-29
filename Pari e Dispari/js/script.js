/**
 *
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.
 *
 */


//chiedo all'utente di scegliere tra pari e dispari 
let pariDispari = prompt ('Scegli tra pari e dispari');
console.log(pariDispari);
/**while (pariDispari !== "pari" || pariDispari !== "dispari") {
    pariDispari = prompt ('Scegli tra pari e dispari');
    console.log(pariDispari);
}*/

//chiedo all'utente di scegliere un numero da 1 a 5 
const numero = prompt ('Scegli un numero da 1 a 5');
console.log(numero);

//creo una funzione per generare un numero random per il computer compreso tra 1 e 5

function getRandomnumber (numMin, numMax) {
    const randomNumber = Math.floor( Math.random() * (numMax - numMin + 1) + numMin );
    return randomNumber;
}

const numeroPc = getRandomnumber(1, 5);
console.log(numeroPc);

//creo una funziona che mi permetta di sommare i due numeri e stabilire se il risultato è pari o dispari

function getEvenOdd (valore1, valore2) {
    let somma = parseInt(valore1) + parseInt(valore2);
    console.log("la somma è " + somma);
    if (somma % 2 === 0) {
        return "pari";

    } else {
        return "dispari";
    }
}

const risultato = getEvenOdd(numero, numeroPc);
console.log(risultato);

if (risultato === pariDispari) {
    console.log("Hai vintoo!");
} else {
    console.log("Hai perso!");
}