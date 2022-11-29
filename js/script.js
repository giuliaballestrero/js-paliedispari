/**
 *
 * Palindromo
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
 *
 */

//chiedo all'utente di inserire una parola
const parola = prompt ('Scrivi una parola');

//dicahiaro una variabile per la parola inversa
let parolaInversa = invertiParola(parola);

//creo una funzione per stabilire i caratteri parola inversa partendo dalla fine
function invertiParola(stringa){
    let parolaInversa = '';
    let i = stringa.length - 1;
  
    while (i >= 0) {
      parolaInversa += stringa[i];
      i--;
    }
  
    return parolaInversa;
}
  
//creo un if per determinare l'uguaglianza tra parola e parola inversa
if (parola === parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}

/**
 *
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.
 *
 */
