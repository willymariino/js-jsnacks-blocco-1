// il software deve chiedere 10 volte all'utente di inserire un numero
// il programma stampa la somma di tutti i numeri inseriti

function askUserNumbers() {
    let somma = 0
    for (i = 0; i < 10; i++) {
        let numero = parseInt(prompt("inserisci un numero"))
        somma += numero;


    }
    console.log("la somma dei numeri è" + somma)
    // se l'obiettivo è stampare in console, non serve il return

}

askUserNumbers()

