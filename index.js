// AttackSkills Klasse Datei importieren
const AttackSkill = require('./src/AttackSkill');
// Player Klasse Datei importieren:
const Player = require('./src/Player');

// Spieler
const elliot = new Player("🐉️ Elliot", 120, 80);
const freeky = new Player("🧟 Freeky", 120, 80);
const elfie = new Player("🧝 Elfie", 120, 80);
const jeannie = new Player("🧞️ Jeannie", 120, 80);

// Fähigkeiten
const blitz = new AttackSkill("Blitz 🌩️ ", 60, 50);
const bombe = new AttackSkill("Bombe 💣️", 60, 50);
const einfrieren = new AttackSkill("Einfrieren 🧊️", 40, 20);
const versteinerung = new AttackSkill("Versteinerung 🗿️", 40, 20);
const feuer = new AttackSkill("Feuer 🔥️", 20, 10);
const wasserfontäne = new AttackSkill("Wasserfontäne 🌊️", 20, 10);

// mit Muscheln eine Überraschung kaufen aus diesem Array:
// const items = ["🍬️", "🎁️", "🪅️", "💌️", "🔮️"];
//zufällig gewähltes Item
// const random = Math.floor(Math.random()*items.length);
// const randomItem = items[random];


// 1.Kampf | Runde 1 | Elfie vs Jeannie
// const elfie = new Player("Elfie 🧝", 120, 80);
// const freeky = new Player("Freeky 🧟", 120, 80);
console.clear();
console.log(elfie.learnSkill(blitz));
console.log(freeky.learnSkill(wasserfontäne));
console.log();
console.log(elfie.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();
console.log(elfie.learnSkill(versteinerung));
// console.log(freeky.getRandomItem());
console.log();
console.log(freeky.openItem("🔮️", elfie));
console.log();
console.log(elfie.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();
console.log(elfie.attack(0, freeky));
console.log();
console.log(freeky.attack(0, elfie));
console.log();
console.log(elfie.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();