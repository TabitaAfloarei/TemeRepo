const initialValues = [false, 55, 100, undefined, ["html", 3, "css"], null, {nume: "Pam", prenume: "Beesly"}, 10, 20, true, "Dunder Mifflin"];

//pct 1
const otherValues = [false, 55, 100, undefined, ["html", 3, "css"], null,"Scranton", 150, "Michael Scott", {nume: "Pam", prenume: "Beesly"}, 10, 20, true, "Dunder Mifflin", 200];
console.log("Other values:\n", otherValues);

//pct 2
initialValues.push(...otherValues);
console.log("Initial values array(modified):\n", initialValues);

//pct 3
console.log("Diferenta este", initialValues[2] - 7);
let sum = initialValues[4][1] + initialValues[7];
console.log("Suma este:", sum);
console.log("Restul impartirii este", initialValues[1] % 10);
//pct 4
//pct 5
//pct 6