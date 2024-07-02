//pct 1
const numere = [12, 10, 5, 32, 9, 4, 17, 29];

let suma = 0;
let media = 0;

for(let i = 0; i < numere.length; i++){
    suma = suma + numere[i];
}

media = suma / 2;
console.log("Media aritmetica a numerelor", JSON.stringify(numere), "este", media);