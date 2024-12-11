//am folosit try-catch pentru a fi sigura ca restul codului(logurile) nu sunt executate daca introduc valoare grsita in prompt
let capCilindrica = parseFloat(prompt('Introduceti capacitatea cilindrica'));
let vehicul = prompt('Tipul vehiculului(auto, motocicleta, camion, autocar, microbuz)').toLowerCase();
let variabilaRon = 0;

let isValidVehicle = false;

//pentru a nu avea lista lunga in iful de jos
switch(vehicul) {
    case "auto":
    case "motocicleta":
    case "autobuz":
    case "autocar":
    case "microbuz":
        isValidVehicle = true;
        break;
    default:
        isValidVehicle = false;
}

try{
    if(capCilindrica <= 0 || !isValidVehicle){
        console.log("Valoare invalida.");
        throw new Error('Valoare invalida.');
    }


if(vehicul === "autobuz" || vehicul === "autocar" || vehicul === "microbuz"){
    variabilaRon = 24;
}else if(capCilindrica <= 1600){
    variabilaRon = 8;
} else if(capCilindrica <= 2000){
    variabilaRon = 18;
} else if(capCilindrica <= 2600){
    variabilaRon = 72;
} else if(capCilindrica <= 3000){
    variabilaRon = 144;
} else {
    variabilaRon = 290;
}


console.log("Capacitatea cilindrica este", capCilindrica);
console.log("Variabila RON este", variabilaRon);
console.log("Tipul vehiculului este", vehicul);

let impozit = Math.floor((capCilindrica / 200) * variabilaRon);
console.log(`Impozitul calculat pentru tipul de vehicul ${vehicul} este`, impozit, 'RON');

} catch(error) {
    console.error("Eroare la prompt:", error.message);
}