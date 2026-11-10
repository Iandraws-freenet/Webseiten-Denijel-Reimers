// =========================================
// Aufgabe 01 – Variablen und Ausgabe
// Starten mit:  node aufgabe.js
// =========================================

console.log("Hallo, ich bin JavaScript!");


// ---------- Teil A – Steckbrief ----------

// TODO: Variablen erstellen: vorname, nachname, alter, stadt, istAzubi


// TODO: Steckbrief ausgeben (siehe README)
// --- Steckbrief ---
let vorname = "Denijel";
let alter = 15;
let stadt = "Westerrönfeld";
let azubi = false


console.log(vorname, alter, stadt, azubi)

// ---------- Teil B – Ändern ----------
console.log(alter = alter + 1)




// ---------- Teil C – Datentypen ----------

// TODO: Mit typeof den Typ von vorname, alter und istAzubi ausgeben
function addition(a,b) {
        console.log(a+b);

}
addition(15,14)
function multiplication(a,b){
    console.log(a*b)

}
multiplication(5,6)

function azubicheck(azubi){
    if(azubi===true){
        console.log("Ich bin ein Azubi")
    }else{
    console.log("Nein bin ich nicht")
    }
}

azubicheck(azubi);


let Rucksack = ["kohle","schwert","spitzhacke","basketball"]
function oeffneRucksack(rkinhalt){
    for(i=0;i<rkinhalt.length;i++){
console.log(rkinhalt[i])
    }
}
oeffneRucksack(Rucksack)


// ---------- Teil D – Ein Satz ----------

// TODO: Mit Backticks ausgeben:
// "Ich heiße ... ..., bin ... Jahre alt und wohne in ...."

