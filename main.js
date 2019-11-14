// variabili
var distanza = parseInt(prompt('Quanti Km vuoi percorrere?'))
var born = parseInt(prompt('In che anno sei nato?'))
var prezzo = 0.21 * distanza
var d = new Date()
var year = d.getFullYear()
var anni = year - born


// condizioni
if (isNaN(born)) {
    document.getElementById('mainRow').setAttribute("class", "hidden");
    document.getElementById('showoff').setAttribute("id", "visible");
    function my_fun() {
        document.location.reload();
    };
}

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
