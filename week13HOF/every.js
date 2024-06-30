//verificati daca toate elementele unui array sunt numere pare folosind metoda every

const array1 = [3, 13, 15, 16, 37, 67, 68, 75, 84, 85, 87, 94, 96];
const array2 = [0, 102, 66, 4, 90, 3984938422];

function verificareParitate(array){
    const isEven = (numar) => numar % 2 === 0;
    const allEven = array.every(isEven);
    return allEven ? console.log("Toate numerele sunt pare.") : console.log("Nu sunt toate elementele pare.");
}

verificareParitate(array1);
verificareParitate(array2);
