//Postoje dva tereta. napravi funkciju koja ispisuje resenje kako postupiti
// u razlicitim ilipak jednakim slucajevima.

var pred1=prompt("Unesi tezinu prvog tereta: ");
var pred2=prompt("Unesi tezinu drugog tereta: ");
var limit=100;

function raporediTeret(pred1, pred2, limit)
var zbir=pred1+pred2;
if (zbir<=limit) {
	console.log("Ponesi oba");
} else if (pred1<=limit && pred2>=limit) {
	console.log("Ponesi prvi pa drugi");
} else if (pred1<=limit && pred2>limit) {
	console.log("Ponesi prvi")
} else if (pred2<=limit &&  pred1>limit) {
	console.log("Ponesi drugi")
} else if (pred1>limit && pred2>limit) {
	console.log("Nijedan")
} else {
	console.log("Greska u unosu");
};

//Kraj kraJ KrAj krAJ