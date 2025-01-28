//* Snack 1
console.log("Snack 1");

const carBrand = ["Aston Martin", "Audi", "Porsche", "Rolls Royce", "Bentley"];
const carModel = ["Vanquish", "RS7", "GT3RS", "Spectre", "Continental"];
const carPower = ["benzina", "diesel", "elettrico", "gpl", "metano"];

const cars = [];
let petrol = [];
let diesel = [];
let alternativePower = [];

// Creazione dell'array composto da 10 automobili
for (let index = 0; index < 10; index++) {
    cars.push({
        brand: brandRandom(carBrand),
        model: modelRandom(carModel),
        power: powerRandom(carPower)
    })
}

console.log(cars);

// Divido le automobili in 3 array separati: 
// nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
for (let index = 0; index < cars.length; index++) {
    const car = cars[index];

    if (car.power === "benzina") {
        petrol.push(car);
    } else if (car.power === "diesel") {
        diesel.push(car);
    } else {
        alternativePower.push(car);
    }
}

// Stampo gli array divisi per alimentazione
console.log("Automobili a benzina:", petrol);
console.log("Automobili a diesel:", diesel);
console.log("Automobili ad alimentazione alternativa:", alternativePower);

// Generazione randomica dei valori
function brandRandom(brand) {
    const marcaIndex = Math.floor(Math.random() * carBrand.length);
    return brand[marcaIndex];
    // console.log(marca);
}

function modelRandom(model) {
    const modelloIndex = Math.floor(Math.random() * carModel.length);
    return model[modelloIndex];
    // console.log(modello);
}

function powerRandom(power) {
    const alimentazioneIndex = Math.floor(Math.random() * carPower.length);
    return power[alimentazioneIndex];
    // console.log(alimentazione);
}

//* Snack 2
console.log("Snack 2");

const stringArr = ["bEntLEY", "asTOn MartIn", "pOrsCHe"];
const formattedStringArr = [];

for (let index = 0; index < stringArr.length; index++) {
    let word = stringArr[index];

    // Riformatto tutte le stringhe in minuscolo
    word = word.toLowerCase();
    
    // Prendo la prima lettera di ogni stringa e la formatto in maiuscola
    // salvandola in una variabile
    let firstLetter = word.charAt(0).toUpperCase();

    // Sostituisco la prima lettera minuscola con quella maiuscola
    word = word.replace(word.charAt(0), firstLetter)

    // Oppure
    // word = firstLetter + word.slice(1);

    // Inserisco le stringhe formattate nel nuovo array
    formattedStringArr.push(word);
}

console.log(stringArr);
console.log(formattedStringArr);

