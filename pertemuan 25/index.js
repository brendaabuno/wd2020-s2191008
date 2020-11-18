//Array

let nilai = [90, 88, 75, 95, 85];

for (let i=0; i<nilai.length; i++){
    console.log("Nilai = ", nilai[i] +5);
}

console.log(nilai);

//nilai[2] = 90;
//console.log{nilai [nilai.lenght -1]};

let john = ["john", "doe", 33, true];
console.log(john[john.length - 1]);
console.log(john);

//tostring()
console.log(john.toString());
//join()
console.log(john.join("  -  "));

//pop()
john.pop();
console.log(john.join("  -  "));

//push()
john.push(true);
john.push("HELLO");
console.log(john.join("  -  "));

//shift()
john.shift();
console.log(john.join("  -  "));

//unshift()
john.unshift("john");
john.unshift("prof");
console.log(john.join("  -  "));

//splice()
let buah=["pisang", "jeruk", "apel", "mangga"];
buah.splice(2,0, "Lemon", "Kiwi");
console.log(buah);

//concat()
let sayur=["bayam", "kangkung", "wortel"];
let biji=["kedelai", "kacang"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//slice()
let snack = ["Lays", "Qtela", "Citato", "Oreo", "Tanggo"];
let snackGurih = snack.slice(0, 3);
let snackManis = snack.slice(3);

console.log(snackGurih);
console.log(snackManis);

//sort
let zodiac = ["Virgo", "Leo", "Sagitarius", "Cancer"];

zodiac.sort();

console.log(zodiac);