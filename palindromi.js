/**
 * Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
 */

const userWord = prompt('Inserire una parola');
console.log(`Parola inserita: ${userWord}`);

const wordReverse = reverseChars(userWord);
console.log(`La parola al contrario è: ${wordReverse}`);

if (userWord === wordReverse) {
    console.log(`La parola "${userWord}" è palindroma`);
} else {
    console.log(`La parola "${userWord}" non è palindroma`);
}



/**
 * Reverse word
 */

function reverseChars(word) {
    let reverse ='';
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    return reverse;
}