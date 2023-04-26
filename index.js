//Willkommen beim Monster Spiel!

// AttackSkills Klasse Datei importieren
const AttackSkill = require('./src/AttackSkill');
// Player Klasse Datei importieren:
const Player = require('./src/Player');

// Spieler
const elliot = new Player("Elliot 🐉️", 120, 80);
const freeky = new Player("Freeky 🧟", 120, 80);
const elfie = new Player("Elfie 🧝", 120, 80);
const jeannie = new Player("Jeannie 🧞️", 120, 80)

// Fähigkeiten
const blitz = new AttackSkill("Blitz 🌩️ ", 50, 50);
const einfrieren = new AttackSkill("Einfrieren 🧊️", 40, 30);
const versteinerung = new AttackSkill("Versteinerung 🗿️", 40, 30);
const feuer = new AttackSkill("Feuer 🔥️", 30, 20);
const wasserfontäne = new AttackSkill("Wasserfontäne 🌊️", 40, 20)
const giftpille = new AttackSkill("Giftpille 💊️", 20, 10);

console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(elfie.learnSkill(blitz));
console.log();
console.log(jeannie.learnSkill(versteinerung));
console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(elfie.attack(0, jeannie));
console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(jeannie.attack(0, elfie));
console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(jeannie.learnSkill(einfrieren));
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(jeannie.attack(1, elfie));
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.learnSkill(wasserfontäne));
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(jeannie.attack(2, elfie));
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(elfie.getStatus());
console.log();
console.log(elfie.attack(0, jeannie));
console.log();
console.log(blitz);
