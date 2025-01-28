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
        brand: brandRandom(),
        model: modelRandom(),
        power: powerRandom()
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
function brandRandom() {
    const marcaIndex = Math.floor(Math.random() * carBrand.length);
    const marca = carBrand[marcaIndex];
    return marca;
    // console.log(marca);
}

function modelRandom() {
    const modelloIndex = Math.floor(Math.random() * carModel.length);
    const modello = carModel[modelloIndex];
    return modello;
    // console.log(modello);
}

function powerRandom() {
    const alimentazioneIndex = Math.floor(Math.random() * carPower.length);
    const alimentazione = carPower[alimentazioneIndex];
    return alimentazione;
    // console.log(alimentazione);
}