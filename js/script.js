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
        brand: generateRandom(carBrand),
        model: generateRandom(carModel),
        power: generateRandom(carPower)
    })
}

console.log(cars);

// Divido le automobili in 3 array separati: 
// nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
for (let index = 0; index < cars.length; index++) {
    // Prendo l'elemento auto
    const car = cars[index];

    // Controllo sulla proprietà dell'auto per determinare l'alimentazione
    // e inserirlo nell'array corretto
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


//* Snack 3
console.log("Snack 3");

const animalName = ["Leone", "gallina", "cane"];
const speciesName = ["fasianidi", "canidi", "felidi"];
const animalClassName = ["mammiferi", "felini", "uccelli"];

const animals = [];

const mammalAnimals = [];

for (let index = 0; index < 4; index++) {
    animals.push({
        nome: generateRandom(animalName),
        famiglia: generateRandom(speciesName),
        classe: generateRandom(animalClassName)
    });
}
console.log(animals)

for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];

    if (animal.classe === "mammiferi"){
        mammalAnimals.push(animal);
    }
}
console.log(mammalAnimals);


//* Snack 4
console.log("Snack 4");

const personName = ["Damiano", "Fabio", "Raj", "Lorenzo"];
const personSurname = ["Rossi", "Bianchi", "Verdi"];
const personAge = [];

const people = [];
const peopleNewArr = [];

// Generazione random dell'età
for (let index = 0; index < personName.length; index++) {
    const age = Math.round(Math.random()*100);
    personAge.push(age);
}

// Popolamento dell'array people
for (let index = 0; index < personName.length; index++) {
    people.push({
        nome: generateRandom(personName),
        cognome: generateRandom(personSurname),
        age: generateRandom(personAge)
    });
}

// Popolamento dell'array peopleNewArr con la stringa per ogni persona
for (let index = 0; index < people.length; index++) {
    const person = people[index];
    
    let canDrive;
    if (person.age < 18){
        canDrive = "non può guidare";
    } else {
        canDrive = "può guidare";
    }

    const phrase = `${person.nome} ${person.cognome} ${canDrive}`;

    peopleNewArr.push(phrase);
}

console.log(people);
console.log(peopleNewArr);


// Generazione randomica dei valori
function generateRandom(array) {
    const element = Math.floor(Math.random() * array.length);
    return array[element];
}