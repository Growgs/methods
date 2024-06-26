export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('length between 2 and 10 symbols');
        }
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('invalid character type');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.maxHealth = 100;

    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Cannot level up dead character');
        }
        this.level += 1;
        this.attack += Math.round(this.attack * 0.2);
        this.defence += Math.round(this.defence * 0.2);
        this.health = this.maxHealth;
    }

    damage(points) {
        if (this.health === 0) {
            return;
        }
        this.health -= points * (1 - this.defence / 100);
        
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
