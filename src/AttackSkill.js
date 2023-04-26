class AttackSkill {
    name;
    damage;
    neededmagic;

    constructor(name, damage, neededmagic) {
        this.name = name;               // string
        this.damage = damage            //nummer
        this.neededmagic = neededmagic; //nummer
    }

}

module.exports = AttackSkill;