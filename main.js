// Chiediamo all' utente il numero di km che vuole percorrere

let userKM = prompt('Inserisci i kilometri che vuoi percorrere');


console.log(userKM);

// Chiediamo all'utente la sua eta

let userAge = prompt ('Inserisci la tua età');

console.log(userAge);

// Calcolo costo per kilometro 

let KMcost = userKM * 0.21;

console.log(KMcost);


// Prezzi per Età

let trainPrice;

if (userAge > 65) {

    trainPrice = (KMcost * 0.126).toFixed(2)
}

else if  (userAge < 18) {

    trainPrice = (KMcost * 0.168).toFixed(2)
}

else  {

    trainPrice = KMcost.toFixed(2)
}

console.log(trainPrice);


// html 

document.getElementById('kilometri').innerHTML = userKM;
document.getElementById('age').innerHTML = userAge;
document.getElementById('results').innerHTML = trainPrice;

