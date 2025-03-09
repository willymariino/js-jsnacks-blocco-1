//crea un array vuoto, chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'arrays
function getOddNumbers() {
    let oddNumbers = []
    for (let i = 0; i <= 6; i++) {
        let numero = parseInt(prompt("inserisci un numero"))
        if (numero % 2 !== 0) {
            oddNumbers.push(numero[i])
        }
    }

    console.log("i numeri dispari sono:" + " " + oddNumbers)

}

getOddNumbers()


