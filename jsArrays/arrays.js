const initialValues = [false, 55, 100, undefined, ["html", 3, "css"], null, {nume: "Pam", prenume: "Beesly"}, 10, 20, true, "Dunder Mifflin"];

// //pct 1
// const otherValues = [false, 55, 100, undefined, ["html", 3, "css"], null,"Scranton", 150, "Michael Scott", {nume: "Pam", prenume: "Beesly"}, 10, 20, true, "Dunder Mifflin", 200];
// console.log("Other values:\n", otherValues);

// //pct 2
// initialValues.push(...otherValues);
// console.log("Initial values array(modified):\n", initialValues);

// //pct 3
// console.log("Diferenta este", initialValues[2] - 7);
// let sum = initialValues[4][1] + initialValues[7];
// console.log("Suma este:", sum);
// console.log("Restul impartirii este", initialValues[1] % 10);

// //pct 4
// initialValues[2] = initialValues[2] - 7;
// initialValues[4][1] = initialValues[4][1] + initialValues[7];
// initialValues[1] = initialValues[1] % 10;
// console.log(initialValues);

// //pct 5
// for(let i = 0; i < initialValues.length; i++){
//     if(Array.isArray(initialValues[i])){
//         for(let j = 0; j < initialValues[i].length; j++){
//             if(typeof(initialValues[i][j]) === "string"){
//                 initialValues[i][j] = initialValues[i][j] + " happy coding";
//             }
//         }
//     }
//     if(typeof(initialValues[i]) === "string"){
//         initialValues[i] = initialValues[i] + " happy coding";
//     }
// }
// console.log(initialValues);

// //pct 6
// for(let i = 0; i < initialValues.length; i++){
//     if(Array.isArray(initialValues[i])){
//         for(let j = 0; j < initialValues[i].length; j++){
//             if(typeof(initialValues[i][j]) === "boolean"){
//                 console.log(`Elementul de pe pozitia ${i}${j} avea initial valoarea ${initialValues[i][j]}`);
//                 initialValues[i][j] = !initialValues[i][j];
//                 console.log(`Elementul are acum valoarea ${initialValues[i][j]}`);
//             }
//         }
//     }
//     if(typeof(initialValues[i]) === "boolean"){
//         console.log(`Elementul de pe pozitia ${i} avea initial valoarea ${initialValues[i]},`);
//         initialValues[i] = !initialValues[i];
//         console.log(`iar acum are valoarea ${initialValues[i]}`);
//     }
// }