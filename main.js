

//kilometri 

let userKM;

// Prezzi per Età

let trainPrice;

// Tipologia Biglietto

let userTicket;


// pulsanti

const pulsanteGenera = document.getElementById('Calcolo');


pulsanteGenera.addEventListener('click', function() { 
    //input km e anni utente
    let userKM  = document.getElementById("km").value;
    let userAge = document.getElementById("eta").value;

    // Calcolo costo per kilometro 

    let KMcost = userKM * 0.21;

    if (userAge === "3") {

        userTicket = "Biglietto Over"

        trainPrice = (KMcost * 0.126).toFixed(2)
    }
    
    else if  (userAge === "2") {

        userTicket = "Biglietto under"
    
        trainPrice = (KMcost * 0.168).toFixed(2)
    }
    
    else  {

        userTicket = "Biglietto standard "
    
        trainPrice = KMcost.toFixed(2)
    }

     //RISULTATO A VIDEO
     document.getElementById("offerta").innerHTML = userTicket;
     document.getElementById("risultato").innerHTML = trainPrice;
     document.getElementById("nomeCognomeDef").innerHTML = document.getElementById("nomecognome").value;



});

