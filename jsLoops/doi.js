//pct 2
const array = [12, "html", 5, 32, true, 4, "css", 29, false, 85, 100];

let sum = 0;
let m_aritm = 0;

for(let i = 0; i < array.length; i++){
    if(typeof(array[i]) === "number"){
        sum = sum + array[i];
    } 
}

m_aritm = sum / 2;
console.log("Media aritmetica a numerelor din array-ul", JSON.stringify(array), "este", m_aritm);