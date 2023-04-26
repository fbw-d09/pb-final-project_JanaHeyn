//Willkommen beim Monster Spiel!

// AttackSkills Klasse Datei importieren
const AttackSkill = require('./src/AttackSkill');
// Player Klasse Datei importieren:
const Player = require('./src/Player');

// Spieler
const elliot = new Player("Elliot 🐉️", 120, 80);
// const freeky = new Player("Freeky 🧟", 120, 80);
const elfie = new Player("Elfie 🧝", 120, 80);
// const jeannie = new Player("Jeannie 🧞️", 120, 80);

// Fähigkeiten
const blitz = new AttackSkill("Blitz 🌩️ ", 60, 50);
const bombe = new AttackSkill("Bombe 💣️", 60, 50);

const einfrieren = new AttackSkill("Einfrieren 🧊️", 40, 20);
const versteinerung = new AttackSkill("Versteinerung 🗿️", 40, 20);

const feuer = new AttackSkill("Feuer 🔥️", 20, 10);
const wasserfontäne = new AttackSkill("Wasserfontäne 🌊️", 20, 10);


// 1.Kampf | Runde 1
/* console.log("1. Kampf | Elfie vs Jeannie | Runde 1:");
console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();*/
// console.log(elfie.learnSkill(bombe));
// console.log(jeannie.learnSkill(blitz));
/*console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();*/
// console.log(elfie.learnSkill(versteinerung));
// console.log(jeannie.learnSkill(einfrieren));
/*console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(elfie.attack(0, jeannie));
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(jeannie.attack(0,elfie));
console.log(jeannie.getStatus());
console.log();
console.log(elfie.getStatus()); */

// 1. Kampf | Runde 2
// elfie kraft: 60, magie: 30, fähigkeiten: 
// jeannie kraft:60, magie: 30
/* console.clear()
console.log("1. Kampf | Elfie vs Jeannie | Runde 2:")
console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus()); */
// console.log(jeannie.getRandomItem(elfie));
// jeannie: -300 Muscheln
// elfie: -30 Kraftpunkte = 30 rest Kraft
/* console.log();
console.log(elfie.attack(1, jeannie));
console.log(); */

// 1. Kampf | Runde 3
/* console.log("1. Kampf | Elfie vs Jeannie | Runde 3:")
console.log();
console.log(elfie.getStatus());
console.log();
console.log(jeannie.getStatus());
console.log();
console.log(elfie.getRandomItem(jeannie));
console.log(); */
//Gewinner 1.Kampf: Elfie



// 2. Kampf | Runde 1
/* console.clear();
console.log("2. Kampf | Elliot vs Freeky | Runde 1:");
console.log();
console.log(elliot.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();
console.log(elliot.learnSkill(feuer));
console.log();
console.log(freeky.learnSkill(wasserfontäne));
console.log();
console.log(elliot.learnSkill(versteinerung));
console.log();
console.log(freeky.learnSkill(einfrieren));
console.log();
console.log(elliot.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();
console.log(elliot.attack(1, freeky));
console.log();
console.log(freeky.attack(0, elliot));
console.log(); */

// 2. Kampf | Runde 2
/* console.log("2. Kampf | Elliot vs Freeky | Runde 2:");
console.log();
console.log(elliot.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();

console.log(elliot.learnSkill(blitz));
console.log(); */
// console.log(freeky.getRandomItem(elliot));
// console.log();
// freeky erhält eine wasserpistole:
// zwischen-status freeky:
// kraft: 80, magie: 70, händisch umändern --> muscheln: 600 -> 300, 
/* console.log(elliot.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();
console.log(elliot.attack(2, freeky));
console.log();
console.log(elliot.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();
console.log(); */
// console.log(freeky.getRandomItem(elliot));
// freeky gibt 300 ab und erhält 600:
// zwischen-status freeky
// kraft: 20, magie: 70, händisch umändern --> msucheln: 300 -> 0;
/* console.log(elliot.getStatus());
console.log();
console.log(freeky.getStatus());
console.log();
console.log(elliot.attack(0, freeky)); */
//Gewinner 2.Kampf: Elliot

// 3. Kampf 1. Runde
/* console.log("3. Kampf | Elfie vs Elliot | Runde 1:");
console.log();
console.log(elfie.getStatus());
console.log(elliot.getStatus());
console.log(); */
/* console.log(elfie.learnSkill(blitz));
console.log();
console.log(elliot.learnSkill(bombe));
console.log();
console.log(elfie.learnSkill(versteinerung));
console.log();
console.log(elliot.learnSkill(einfrieren));
console.log(); */
/* console.log(elfie.getStatus());
console.log(elliot.getStatus()); */
// console.log();
// console.log(elfie.attack(0, elliot));
// console.log();
// console.log(elliot.attack(0, elfie));
// 3. Kampf | Runde 2
/* console.log("3. Kampf | Elfie vs Elliot | Runde 2:");
console.log();
console.log(elfie.getStatus());
console.log(elliot.getStatus());
console.log(); */
// console.log(elfie.attack(0, elliot));
// console.log(blitz);
/* console.log();
console.log(elfie.getMagic());
console.log(); */
/* console.log(elfie.getStatus());*/
/* console.log(elliot.getStatus()); 
console.log(bombe);
console.log(einfrieren);
console.log(); */
// console.log(elliot.attack(1, elfie));
/* console.log();
console.log(elfie.getStatus()); */
console.log(elliot.getStatus());
console.log();
console.log(blitz);
console.log(versteinerung);
console.log();
console.log(elfie.attack(0, elliot));