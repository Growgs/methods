import Character from '../class/Character.js';

test('Character damage method reduces health correctly', () => {
    const referenceCharacter = new Character('Test', 'Swordsman');
    referenceCharacter.defence = 10;
    referenceCharacter.damage(20);

    const character = new Character('Test', 'Swordsman');
    character.defence = 10;
    character.damage(20);

    expect(character).toEqual(referenceCharacter);
});

test('Character damage method does not reduce health below 0', () => {
    const referenceCharacter = new Character('Test', 'Swordsman');
    referenceCharacter.defence = 100;
    referenceCharacter.damage(200);

    const character = new Character('Test', 'Swordsman');
    character.defence = 100;
    character.damage(200);

    expect(character).toEqual(referenceCharacter);
});

test('Character damage method does not affect health if health is already 0', () => {
    const character = new Character('Test', 'Swordsman');
    character.health = 0;

    character.damage(20);
    expect(character.health).toBe(0);
});
