// Iskoristiti  postojeci niz podataka u dve funkcije prva neka sabere prosek godina
// a druga neka sabere koliko ima kojih sektora

var people = [
{
	name : 'Joe Schmoe',
	yearsExpirience : 1,
	department : 'IT'
},
{
	name : 'Sally Sallerson',
	yearsExpirience : 15,
	department : 'Engineering'
},
{
	name : 'Bill Billson',
	yearsExpirience : 5,
	department : 'Engineering'
},
{
	name : 'Jane Janet',
	yearsExpirience : 11,
	department : 'Management'
},
{
	name : 'Bob Hope',
	yearsExpirience : 9,
	department : 'IT'
}
];

function prosek(objekat) {
	var poro,oro=1;
	for (var i=0; i<=objekat.length; i++) {
		poro+=objekat[i].yearsExpirience;
	}
	oro=poro/objekat.length;
	console.log(oro)
}

// TESTIRA SE SA prosek("people")

function stat(objekat) {
	var NewObj={
		Engineering : 0,
		IT : 0,
		Management : 0
	};
	for (var i=0; i<=objekat.length; i++) {
		switch objekat[i].department {
			case "Engineering" : NewObj.Engineering++;
			case "Management" : NewObj.Management++;
			case "IT" : NewObj.IT++;
		}
	}
	console.log("Engeneering: "+NewObj.Engeneering\n+"Management: "+NewObj.Management\n+"IT: "+NewObj.IT);
};

// TESTIRA SE SA stat();