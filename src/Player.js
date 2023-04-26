class Player
{
    name;
    power;
    magic;
    skills;
    money;

    constructor(name, power, magic, money = 600) {
        this.name = name;       // string + symbol  
        this.power = power;     // nummer
        this.magic = magic;     // nummer
        this.skills = [];       // wird erlernt, 
        this.money = money;       // Defaultwert 600 
    }

    getSkills() {
        return this.skills;
    }

    // Methode: neue Fähigkeit erlernen
    learnSkill(skill) {
        // skill dem array this.skills hinzufügen  
        this.skills.push(skill); 
        // console.log("das ist die fähigkeit:", this.skills[this.skills.length -1].name);
        return `${this.name} hat die Fähigkeit ${this.skills[this.skills.length -1].name} neu erlernt.`
    }

    // player-status erhalten/abfragen
    getStatus() {
        // nur den Namen der einzelnen Fähigkeiten abgreifen (jede Fähigkeit ist ein einzelnes Objekt!)
        let skillNames = this.skills.map(obj => obj.name);
        // console.log("name:", skillNames);
        
        if(this.skills.length == 0) {
            return `--- Status von ${this.name} ---\r\nKraft 💖️ \t: ${this.power}\r\nMagie 🪄️ \t: ${this.magic}\r\nFähigkeiten 💪️ \t: noch keine Fähigkeiten erlernt\r\nGeld 🐚️ \t: ${this.money}`
        }
        else if(this.health == 0) {
            return `--- Status von ${this.name} ---\r\nKraft 💖️ \t: 💀️\r\nMagie 🪄️ \t: ${this.magic}\r\nFähigkeiten 💪️ \t: ${skillNames}\r\nGeld 🐚️ \t: ${this.money}`
        }
        return `--- Status von ${this.name} ---\r\nKraft 💖️ \t: ${this.power}\r\nMagie 🪄️ \t: ${this.magic}\r\nFähigkeiten 💪️ \t: ${skillNames}\r\nGeld 🐚️ \t: ${this.money}`
    }

    // Methode: Angreifen
    attack(skill, enemy) {
        // skill = Bezug zum enstprechenden Element aus Array of Skills des angreifenden Spielers herstellen und in einer neuen variablen abspeichern:
        // console.log("das ist die fähigkeit:", this.skills[skill].name);

        let attack = this.skills[skill];
        // console.log("das ist die attacke:", attack);

        // prüfen, ob genug Gesundheit
        if(this.power <= 0) {
            return `🪦️  ${this.name} ist bereits ausgeschieden und kann nicht mehr kämpfen.`;   
        } 
        // prüfen, ob genug Magie 
        else if(this.magic < attack.neededmagic) {
            return `⛔️ ${this.name} hat nicht genug Magie für diesen Angriff.`;
        }
        // prüfen, ob Gegner nach Abzug des Schadens <= 0 bzw dann tot ist
        else if(enemy.power - attack.damage <= 0) {
            enemy.power = 0;
            return `${enemy.name} hat keine Kraft mehr und gibt auf 🏳️.\r\n${this.name} hat gewonnen 🏆️!`
        }
        // Abzug damage von Gegner
        else {
            enemy.power -= attack.damage;
            this.magic -= attack.neededmagic;
            return `💥️ ${this.name} hat die Fähigkeit ${attack.name} erfolgreich ausgeführt!\r\n- minus ${attack.damage} Kraftpunkte für ${enemy.name}\r\n- minus ${attack.neededmagic} Magiepunkte für ${this.name}.`    
        }
    }

    getMagic() {
        // der Spieler etwas Magie zurück von Merlin
        this.magic += 20; 

        return `🪄️  🪄️  🪄️  - ${this.name} hat 20 Magiepunkte von Merlin 🧙️ erhalten!` + `\r\n${this.name} besitzt nun insgesamt ${this.magic} Magiepunkte.`;
    }

    getRandomItem(enemy) {
        // mit Muscheln eine Überraschung kaufen aus diesem Array:
        const items = ["Kraft 💖️", "Magieklau 🧲️🪄️", "Angriff 🗡️", "Wasserpistole 🔫️", "Geld 🐚️"];

        // zufällig ein Item auswählen und in einer Variablen abspeichern:
        const random = Math.floor(Math.random()*items.length);
        const randomItem = items[random];

        // Muscheln werden abgezogen:
        this.money -= 300;

        // Konditionen erstellen für jedes Item:
        if(randomItem === "Kraft 💖️") {
            this.power += 30;
            return `${this.name} gibt 300🐚️ ab und erhält dafür +30 ${randomItem} Punkte!`
        }
        else if(randomItem === "Magieklau 🧲️🪄️") {
            if(enemy.magic === 0) {
                return `Sorry! Bei ${enemy.name} gibt es keine Magiepunkte mehr zu klauen.`
            }
            else if(enemy.magic === 10) {
                enemy.magic = 0;
                this.magic += 10;
                return `${this.name} hat für 300🐚️ ${randomItem} eingetauscht und klaut von ${enemy.name} die restlichen 10 Magiepunkte!`
            }
            else if(enemy.magic === 20) {
                enemy.magic = 0;
                this.magic += 20;
                return `${this.name} hat für 300🐚️ ${randomItem}  eingetauscht und klaut von ${enemy.name} alle 20 Magiepunkte!`
            }
            else if(enemy.magic >= 30) {
                enemy.magic -= 30;
                this.magic += 30;
                return `${this.name} hat für 300🐚️ ${randomItem}  eingetauscht und klaut von ${enemy.name} ganze 30 Magiepunkte!`
            }
        }
        else if(randomItem === "Angriff 🗡️") {
            if(enemy.power === 10 || enemy.power === 20 || enemy.power === 30) {
                enemy.power = 0;
                return `${this.name} hat für 300🐚️ einen Extrtazug ${randomItem}  gekauft und greift ${enemy.name} an.\r\n${enemy.name} 🏳️  gibt auf und verliert das Spiel.\r\n${this.name} gewinnt das Spiel 🏆️!`
            }
            else {
                enemy.power -= 30;
                return `${this.name} hat für 300🐚️ einen Extrtazug ${randomItem}  gekauft und greift ${enemy.name} an.\r\n${enemy.name} verliert 30 Kraftpunkte!`
            }
        }
        else if(randomItem === "Geld 🐚️") {
            this.money += 600;
            return `${this.name} gibt ❌️ 300🐚️ ab und erhält ✅️ 600🐚️ zurück!`
        }
        else {
            return `${this.name} hat eine ${randomItem} erhalten 🎉️🎉️🎉️!\r\nAch so, das ist übrigens eine Niete 🎭️\r\nDie 300🐚️ werden dennoch abgezogen 🤷️!`;
            
        }

        // console.log(items[random]);
        // console.log(this.getStatus());
    }
}

module.exports = Player;
