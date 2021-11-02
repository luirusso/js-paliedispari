/**
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

let sceltaUtente = prompt('Inserire pari o dispari').trim().toLowerCase();

while ( (sceltaUtente !== 'pari') && (sceltaUtente !== 'dispari') ) {
    sceltaUtente = prompt('Il valore inserito non è valido. Per favore inserire pari o dispari').trim().toLowerCase();
}

console.log(sceltaUtente);

// Player number

let numeroUtente = parseInt(prompt('Inserire un numero da 1 a 5'));
console.log('player', numeroUtente);

// Generate computer number

const numeroComputer = getRandomNumber(1, 5);
console.log('computer', numeroComputer);

// Number sum

const somma = numeroUtente + numeroComputer;


// Check winner

if(sceltaUtente === checkOddEven(somma)) {
    console.log('Il giocatore ha vinto');
} else {
    console.log('Il computer ha vinto');
}


/**
 *  Generate random number
 */
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

/**
 *  Check if number is even or odd
 */

function checkOddEven(number) {
    if(number % 2 === 0) {
        return 'pari';
    }

    return 'dispari';
}