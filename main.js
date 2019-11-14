// variabili
var distanza = parseInt(prompt('Quanti Km vuoi percorrere?'))
var anni = parseInt(prompt('Quanti anni hai?'))
var prezzo = 0.21 * distanza


// condizioni
if (anni < 18) {
    prezzoFinale = prezzo * 0.8
} else if (anni >= 65) {
    prezzoFinale = prezzo * 0.6
}
else {
    prezzoFinale = prezzo
}
// console
console.log(distanza);
console.log(anni);
console.log(prezzo + '€');
console.log(prezzoFinale + '€')
// comandi

document.getElementById('distance').innerHTML = distanza;
document.getElementById('age').innerHTML = anni;
document.getElementById('price').innerHTML = prezzo;
document.getElementById('finalprice').innerHTML = prezzoFinale;
