// l'utente due numeri in successione, con due prompt. Il software stampa il maggiore.
const num1 = parseInt(prompt('Inserisci il primo numero'));
const num2 = parseInt(prompt('Inserisci il secondo numero'));
if (num1 > num2) {
    console.log(num1);
}
else if (num2 > num1) {
    console.log(num2);
}
else {
    console.log('I numeri sono uguali');
}