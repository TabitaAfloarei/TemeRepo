//folosind reduce, adunati toate numerele dintr-un array

const array1 = [10, 10, 10, 10, 10];
const array2 = [3, 13, 15, 16, 37, 67, 68, 75, 84, 85, 87, 94, 96];
const array3 = [3, 13, "Lavinia", 16, -4, 67, undefined, 75, 84, ["a", "b", "c"], 87, 94, 96];
const array4 = [];

function adunare(array){
    const initialValue = 0;

    const numere = array.filter((element) => typeof element === 'number' && !isNaN(element)); // filtram doar numerele din array-ul dat

    const suma = numere.reduce( 
        (accumulator, currentValue) => accumulator + currentValue, initialValue //initial value pt cazul in care am un array gol
    );
    console.log('Suma numerelor din array este:', suma);
}

adunare(array1);
adunare(array2);
adunare(array3);
adunare(array4);