export class Character {
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
    }
}
