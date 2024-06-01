//pct 3

let f_nMinusUnu = 1;
let f_nMinusDoi = 0;
let f_n = 0;

const fibonacci = [0, 1];

for(let i = 2; i < 20; i++){
    f_n = f_nMinusUnu + f_nMinusDoi;
    f_nMinusDoi = f_nMinusUnu;
    f_nMinusUnu = f_n;
    fibonacci.push(f_n);
}

console.log("Sirul lui Fibonacci:\n", JSON.stringify(fibonacci));