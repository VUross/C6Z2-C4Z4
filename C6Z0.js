// Mala datoteka  u okviru programa i tri funkcije prva 
// zaduzena za pravljemnje niza sa nadodatim stringom /10, druga vadi broj ocena,
// treca prosek ocena.

var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	trajanjeNedelja : 33,
	predavac: {
		ime : "Petar",
		prezime : "Petrovic"
	},
	ocenePolaznika : [3,2,7,4,8,1,9,2,10,10,3,6,3,1,7,3,5,4,10,9,1,9],
	organizacija : "Startit",
	kursJosTraje : true
};

function polaznici(objekat) {
	for (var i=0; i<=objekat.length; i++) {
		objekat[i]=objekat[i]+"/10";
		console.log(objekat[i]);}
};

// TESTIRA SE SA polaznici("testObjekat.ocenePolaznika");

function prosek(objekat) {
	var brojac=0;
	for (var i=1; i<=10; i++) {
		brojac=0;
		for (var k=0; k<=objekat.length; k++) {
			if (i===objekat[k]) {
				brojac += 1;
			} 
		} console.log("Ocena "+i+" se ponavlja "+brojac);
	}
}

// TESTIRA SE SA prosek("testObjekat.ocenePolaznika")

function ocena(objekat) {
    var prosek = 0;
    for (var i = 0; i < objekat.length; i++) {
        prosek += objekat[i];
    }
    var ukupno = prosek / objekat.length;
    console.log(ukupno);
}

// TESTIRA SE SA ocena("testObjekat");

//Kraj kRAJ kRaj krAJ