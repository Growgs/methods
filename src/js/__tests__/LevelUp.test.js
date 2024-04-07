import Character from '../class/Character.js';

test('levelUp test', () => {
    const referenceCharacter = new Character('Test', 'Swordsman');
    referenceCharacter.attack = 40;
    referenceCharacter.defence = 10;
    referenceCharacter.levelUp();

    const character = new Character('Test', 'Swordsman');
    character.attack = 40;
    character.defence = 10;
    character.levelUp();

    expect(character).toEqual(referenceCharacter);
});

test('Character levelUp method throws error when health is 0', () => {
    const character = new Character('Test', 'Swordsman');
    character.health = 0;

    expect(() => character.levelUp()).toThrow('Cannot level up dead character');
});
