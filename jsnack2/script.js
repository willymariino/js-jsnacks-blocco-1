const word1 = (prompt('inserisci la prima parola'));
const word2 = (prompt('inserisci la seconda parola'));
if (word1.length > word2.lenght)
    console.log(word1);
else if (word2.length > word1.lenght)
    console.log(word2);
else
    console.log('le parole sono lunghe uguali');