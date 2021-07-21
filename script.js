const age = 25;
const isFemale = true;
const driverStatus = "bob"

if(age>18){
    console.log("Je bent ouder dan 18, dus vermaak je!!");
}
if(age>18 && age <= 25){
    console.log("Je bent bovendien tussen de 18 en 25, 50 procent korting!!")
}else{
    console.log("Sorry je bent nog te jong, je mag er niet in!")
}

if(isFemale){
    console.log("Leuk dat je er bent, kom binnen!")
}else{
    console.log("Ladiesnight dude! Gaat heen!!")
}

if(driverStatus === "bob"){
    console.log("Jij bent de Bob dus jij mag rijden")
}else{
    console.log("Jij bent te dronken dus jij mag niet rijden")
}

const firstName = "Bram"

if (firstName === "Bram" || firstName === "Sarah"){
    console.log("Gefeliciteert "+firstName+ ", je hebt recht op een gratis biertje")
}
else{
    console.log("Jammer, je heet geen Bram of Sarah.")
}



const totalAmount = 26;
const drank1 = 25;
const drank2 = 50;
const drank3=100

if(totalAmount > drank1){
    console.log("Je hebt meer dan 25 euro bestelt, alstublieft een gratis portie bitterballen van het huis!")
}else
if (totalAmount > drank2){
    console.log("Je hebt meer dan 50 euro bestelt, je krijgt een portie Nachos van het huis")
}else
if(totalAmount > drank3){
   console.log("Je hebt meer dan 100 euro bestelt, dankjewel, hier een flesje champagne, van het huis vanzelfsprekend")
}
else{
    console.log("Zal ik je iets vertellen over onze jubileum aanbiedingen?")
}

