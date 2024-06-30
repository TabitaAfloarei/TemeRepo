//folosind forEach, afisati toate elementele unui array

const array1 = [3, 13, "Lavinia", 16, -4, 67, undefined, 75, 84, ["a", "b", "c"], 87, 94, 96];
const array2 = [
    { id: 1, numar: 2 },
    'String simplu',
    { id: 2, numar: 4 },
    121,
    { id: 3, numar: 6 }
  ];

  function displayAll(array){
    console.log("Array-ul este:");

    array.forEach((element) => {
        console.log(element)
  });
    }

  displayAll(array1);
  displayAll(array2);