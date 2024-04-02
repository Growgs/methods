import { CharacterClass, BowmanClass, SwordsmanClass, MagicianClass, UndeadClass, ZombieClass, DaemonClass } from '../character';

describe('Character creation', () => {
    test('Create Bowman', () => {
        const bowman = new BowmanClass('Robin');
        expect(bowman.name).toBe('Robin');
        expect(bowman.type).toBe('Bowman');
        expect(bowman.health).toBe(100);
        expect(bowman.level).toBe(1);
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25);
    });

    test('Create Swordsman', () => {
        const swordsman = new SwordsmanClass('Arthur');
        expect(swordsman.name).toBe('Arthur');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });

    test('Create Magician', () => {
        const magician = new MagicianClass('Merlin');
        expect(magician.name).toBe('Merlin');
        expect(magician.type).toBe('Magician');
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });

    test('Create Undead', () => {
        const undead = new UndeadClass('Ghoul');
        expect(undead.name).toBe('Ghoul');
        expect(undead.type).toBe('Undead');
        expect(undead.health).toBe(100);
        expect(undead.level).toBe(1);
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });

    test('Create Zombie', () => {
        const zombie = new ZombieClass('Rotten');
        expect(zombie.name).toBe('Rotten');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });

    test('Create Daemon', () => {
        const daemon = new DaemonClass('Specter');
        expect(daemon.name).toBe('Specter');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });

    test('Invalid name', () => {
        expect(() => new SwordsmanClass('A')).toThrow();
    });

    test('Invalid type', () => {
        expect(() => new CharacterClass('John', 'Warrior')).toThrow();
    });
});

