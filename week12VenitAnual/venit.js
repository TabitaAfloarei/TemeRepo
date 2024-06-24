const firstSentence = "Ion castiga 5000 lei/luna din salariu, 1000 lei/an bonus si 1500 lei/luna din freelancing";
const secondSentence = "Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei/an si mai castiga suplimentar aproximativ 500 usd/luna din freelancing";

function computeIncome(sentence){
    let persoana = sentence.split(" ")[0]; // numele persoanei pentru fraza de return
    let venitTotal = 0;

    let euro = 4.95;
    let usd = 4.7;
    let frecventaLuna = 12;

    const regex = /\b\d+\s*(lei|euro|usd)\/(an|luna)\b/gi; // identifica 5000 lei/luna, 1000lei/an, etc..

    const sumeRaw = sentence.match(regex); // returneaza array cu match-urile

    const sume = sumeRaw.map(suma => {
        //destructurez elementele match-uite, le pun intr-un obiect, iar _ ignora primul element care e stringul complet pe care nu-l folosesc
        const [_, numarString, valuta, frecventa] = suma.match(/(\d+)\s*(lei|euro|usd)\/(an|luna)/i);  //array 

        venit = parseFloat(numarString); // din numar(string) => numar(float)

        //not the best = > de revenit
        if(valuta === 'euro'){
            venit = venit * euro;
        } else if(valuta === 'usd'){
            venit = venit * usd;
        }
        //de revenit
        if(frecventa === 'luna'){
            venit = venit * frecventaLuna;
        }
        console.log(venit); //verificare
        return venit;
    });

    console.log(sume); //verificare
    for(const suma of sume){
        venitTotal = venitTotal + suma;
    }

    console.log(`Venitul total anual al lui ${persoana} este de ${venitTotal} lei.`);
}


computeIncome(firstSentence);
computeIncome(secondSentence);