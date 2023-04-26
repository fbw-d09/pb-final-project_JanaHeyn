class Player
{
    name;
    health;
    magic;
    skills;
    money;

    constructor(name, health, magic) {
        this.name = name;       // string + symbol  
        this.health = health;   // nummer
        this.magic = magic;     // nummer
        this.skills = [];       // wird erlernt, 
        this.money = 600;       // immer vorgegegeben 
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
            return `--- Status von ${this.name} ---\r\nGesundheit 💖️ \t: ${this.health}\r\nMagie 🪄️ \t: ${this.magic}\r\nFähigkeiten 💪️ \t: noch keine Fähigkeiten erlernt\r\nGeld 🐚️ \t: ${this.money}`
        }
        else if(this.health == 0) {
            return `--- Status von ${this.name} ---\r\nGesundheit 💖️ \t: 💀️\r\nMagie 🪄️ \t: ${this.magic}\r\nFähigkeiten 💪️ \t: ${skillNames}\r\nGeld 🐚️ \t: ${this.money}`
        }
        return `--- Status von ${this.name} ---\r\nGesundheit 💖️ \t: ${this.health}\r\nMagie 🪄️ \t: ${this.magic}\r\nFähigkeiten 💪️ \t: ${skillNames}\r\nGeld 🐚️ \t: ${this.money}`
    }

    // Methode: Angreifen
    attack(skill, enemy) {
        // skill = Bezug zum enstprechenden Element aus Array of Skills des angreifenden Spielers herstellen und in einer neuen variablen abspeichern:
        // console.log("das ist die fähigkeit:", this.skills[skill].name);

        let attack = this.skills[skill];
        // console.log("das ist die attacke:", attack);

        // prüfen, ob genug Gesundheit
        if(this.health <= 0) {
            return `🪦️  ${this.name} ist bereits ausgeschieden und kann nicht mehr kämpfen.`;   
        } 
        // prüfen, ob genug Magie 
        else if(this.magic < attack.neededmagic) {
            return `⛔️ ${this.name} hat nicht genug Magie für diesen Angriff.`;
        }
        // prüfen, ob Gegner nach Abzug des Schadens <= 0 bzw dann tot ist
        else if(enemy.health - attack.damage <= 0) {
            enemy.health = 0;
            return `${this.name} hat gewonnen! Alle Gesundheitspunkte von ${enemy.name} 💀️ aufgebraucht.`
        }
        // Abzug damage von Gegner
        else {
            enemy.health -= attack.damage;
            this.magic -= attack.neededmagic;
            return `💥️ ${this.name} hat die Fähigkeit ${attack.name} erfolgreich ausgeführt!\r\n- minus ${attack.neededmagic} Magiepunkte für ${this.name}\r\n- minus ${attack.damage} Gesundheitspunkte für ${enemy.name}.`    
        }
    }

    getMagic() {
        // random mäßig bekommt der Spieler etwas Magie zurück von Merlin

        // vorgegebenes Array mit möglichen Werten
        const addMagic = [10, 20, 30, 40, 50];

        // random index vom Element
        const random = Math.floor(Math.random()*addMagic.length);
        // console.log(random);

        // random element
        // addMagic[random];
        
        // this.magic mit geschenkter Magie addieren
        this.magic += addMagic[random]; 
        return `🪄️  🪄️  🪄️  - ${this.name} hat ${addMagic[random]} Magiepunkte von Merlin 🧙️ erhalten!` + `\r\n${this.name} besitzt nun insgesamt ${this.magic} Magiepunkte.`;
    }

    getRandomItem(enemy) {
        // mit Muscheln eine Überraschung kaufen
        const items = ["Gesundheit 💖️", "Magieklau 🧲️🪄️", "Angriff 🗡️", "Wasserpistole 🔫️"];

        const random = Math.floor(Math.random()*items.length);

        const randomItem = items[random];

        // geld wird abgezogen
        this.money -= 300;

        // Konditionen erstellen für jedes Item:
        if(randomItem === "Gesundheit 💖️") {
            this.health += 30;
            return `${this.name} hat für 300🐚️ ${randomItem} gekauft und erhält 30 Gesundheitspunkte!`
        }
        else if(randomItem === "Magieklau 🧲️🪄️") {
            enemy.magic -= 30;
            return `${this.name} hat für 300🐚️ ${randomItem}  gekauft und entzieht ${enemy.name} 30 Magiepunkte!`
        }
        else if(randomItem === "Angriff 🗡️") {
            enemy.health -= 30;
            return `${this.name} hat für 300🐚️ ${randomItem}  gekauft und greift ${enemy.name} an. ${enemy.name} verliert 30 Gesundheitspunkte!`
        }
        else {
            return `${this.name} hat eine ${randomItem} erhalten, das ist leider eine Niete, die 300🐚️ werden dennoch abgezogen 🤷️!`
        }

        // console.log(items[random]);
    }
}

module.exports = Player;
