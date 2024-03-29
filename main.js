// variabile distanza
var distanza = parseInt(prompt('Quanti Km vuoi percorrere?'));

// condizione: l`età viene chiesta solo se la distanza è valida, altrimenti si riparte, è un loop fatto in maniera molto artigianale
if (!distanza) {
    window.location.href = "web_pages/error.html";
} else {
    var born = parseInt(prompt('In che anno sei nato?'));
}
// se l'età non è valida si riparte, altrimenti vengonbo definite le varibili restanti
if (!born) {
    window.location.href = "web_pages/error.html";
} else {
    document.getElementById('showoff').setAttribute("class", "jumbotron jumbotron-fluid bg-dark");
    var prezzo = Math.ceil(0.21 * distanza);
    var d = new Date();
    var year = d.getFullYear();
    var anni = year - born;
}

// condizioni di sconto del biglietto
if (anni < 18) {
    prezzoFinale = prezzo * 0.8;
} else if (anni >= 65) {
    prezzoFinale = prezzo * 0.6;
}
else {
    prezzoFinale = prezzo;
    document.getElementById('paragWarning').setAttribute("class", "lead text-warning");
}

// comandi
document.getElementById('distance').innerHTML = distanza;
document.getElementById('age').innerHTML = anni;
document.getElementById('price').innerHTML = prezzo;
document.getElementById('finalprice').innerHTML = prezzoFinale;
