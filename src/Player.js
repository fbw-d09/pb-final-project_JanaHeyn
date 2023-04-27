class Player
{
    name;
    power;
    magic;
    skills;
    money;

    constructor(name, power, magic, money) {
        this.name = name;       // string + symbol  
        this.power = power;     // nummer
        this.magic = magic;     // nummer
        this.skills = [];       // wird erlernt, 
        this.money = 600;     // Defaultwert 600 
    }

    getSkills() {
        return this.skills;
    }

    // Methode: neue Fähigkeit erlernen
    learnSkill(skill) {

        // erst prüfen, ob die Fähigkeit bereits erlernt wurde
        if(this.skills.includes(skill)) {
            return `${this.name} hat die Fähigkeit ${skill.name} bereits erlernt.`
        }
        // skill dem array this.skills hinzufügen  
        this.skills.push(skill); 
        // console.log("das ist die fähigkeit:", this.skills[this.skills.length -1].name);
        return `${this.name} hat die Fähigkeit ${this.skills[this.skills.length -1].name} neu erlernt.`
    }

    // player-status erhalten/abfragen
    getStatus() {
        // nur den Namen der einzelnen Fähigkeiten abgreifen (jede Fähigkeit ist ein einzelnes Objekt!)
        let skillNames = this.skills.map(obj => obj.name);
        
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

        // Indexnummer eingeben
        // let attack = this.skills[skill].name;
        // console.log("das ist die fähigkeit:", this.skills[skill].name);

        // Skillname eingeben:
        let attack = skill.name;
        // console.log("fähigkeit:", attack);

        // prüfen, ob Angreifer noch im Spiel
        if(this.power <= 0) {
            return `🪦️  ${this.name} ist bereits ausgeschieden und kann nicht mehr kämpfen.`;   
        } 
        // prüfen, ob genug Magie 
        else if(this.magic < skill.neededmagic) {
            return `⛔️ ${this.name} hat nicht genug Magie für diesen Angriff.`;
        }
        // prüfen, ob Angreifer die Fähigkleit schon erlernt hat
        else if (!this.skills.includes(skill)) {
            return `${this.name} hat die Fähigkeit ${skill.name} noch nicht erlernt.`
        }
        // prüfen, ob Gegner nach Abzug des Schadens <= 0 bzw dann ausgeschieden ist
        else if(enemy.power - skill.damage <= 0) {
            enemy.power = 0;
            return `💥️ Der Angriff war erfolgreich! ${enemy.name} hat keine Kraft mehr und gibt auf 🏳️\r\n${this.name} hat gewonnen 🏆️!`
        }
        // Abzug damage von Gegner
        else {
            enemy.power -= skill.damage;
            this.magic -= skill.neededmagic;
            return `💥️ ${this.name} hat die Fähigkeit ${attack} erfolgreich ausgeführt!\r\n- minus ${skill.damage} 💖️ Kraftpunkte für ${enemy.name}\r\n- minus ${skill.neededmagic} 🪄️  Magiepunkte für ${this.name}.`    
        }
    }

    // Magie von Merlin erhalten
    getMagic() {
        // der Spieler etwas Magie zurück von Merlin
        this.magic += 20; 

        return `🪄️  🪄️  🪄️  - ${this.name} hat 20 Magiepunkte von Merlin 🧙️ erhalten!` + `\r\n${this.name} besitzt nun insgesamt ${this.magic} Magiepunkte.`;
    }

    // Zufällig auserwähltes Item erhalten beim Glücksspiel
    getRandomItem() {
        // mit Muscheln eine Überraschung kaufen aus diesem Array:
        const items = ["🍬️", "🎁️", "🪅️", "💌️", "🔮️"];
        //zufällig gewähltes Item
        const random = Math.floor(Math.random()*items.length);
        const randomItem = items[random];
        return `${this.name} hat für 300🐚️ am Glücksspiel 🎰️ teilgenommen und  ${randomItem}  erhalten.`;
    }

    // erhaltenes Item öffnen
    openItem(randomItem, enemy) {
        // Muscheln werden abgezogen:
        this.money -= 300;

        // Konditionen erstellen für jedes Item:
        if(randomItem === "🍬️") {
            this.power += 30;
            return `${this.name} isst das 🍬️ und erhält dafür +30 Kraft 💖️ Punkte!`
        }
        else if(randomItem === "🎁️") {
            if(enemy.magic === 0) {
                return `${this.name} öffnet das 🎁️ und hat den Magiemagneten 🧲️🪄️ erhalten! \r\nDoch bei ${enemy.name} gibt es leider keine Magiepunkte mehr zu klauen.`
            }
            else if(enemy.magic === 10) {
                enemy.magic = 0;
                this.magic += 10;
                return `${this.name} öffnet das 🎁️ und hat den Magiemagneten 🧲️🪄️ erhalten und klaut ${enemy.name}s restliche 10 Magiepunkte!`
            }
            else if(enemy.magic === 20) {
                enemy.magic = 0;
                this.magic += 20;
                return `${this.name} öffnet das 🎁️ und hat den Magiemagneten 🧲️🪄️ erhalten und klaut ${enemy.name}s restliche 20 Magiepunkte!`
            }
            else if(enemy.magic >= 30) {
                enemy.magic -= 30;
                this.magic += 30;
                return `${this.name} öffnet das 🎁️ und hat den Magiemagneten 🧲️🪄️  gewonnen und klaut von ${enemy.name} ganze 30 Magiepunkte!`
            }
        }
        else if(randomItem === "🪅️") {
            if(enemy.power === 10 || enemy.power === 20 || enemy.power === 30) {
                enemy.power = 0;
                return `${this.name} öffnet das 🪅️  und hat ein 🗡️  erhalten und greift ${enemy.name} an.\r\n${enemy.name} 🏳️  gibt auf und verliert das Spiel.\r\n${this.name} gewinnt das Spiel 🏆️!`
            }
            else {
                enemy.power -= 30;
                return `${this.name} öffnet das 🪅️  und hat ein 🗡️  erhalten und greift ${enemy.name} an.\r\n${enemy.name} verliert 30 Kraftpunkte!`
            }
        }
        else if(randomItem === "💌️") {
            this.money += 600;
            return `${this.name} öffnet den Brief und bekommt 600🐚️ zurück!`
        }
        else {
            return `${this.name} reibt an der 🔮️ und herauskommt eine 🔫️ Wasserpistole 🎉️🎉️🎉️!\r\nAch so, das ist übrigens eine Niete 🎭️\r\nDie 300🐚️ gibt es nicht zurück 🤷️!`;   
        }
    }
}

module.exports = Player;
