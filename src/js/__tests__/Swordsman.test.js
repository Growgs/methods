import Swordsman from '../class/Swordsman.js';

test('Правильно создаётся объект Swordsman', () => {
    const swordsman = new Swordsman('Arthur');
    const correct = { 
        attack: 40, 
        defence: 10, 
        health: 100, 
        level: 1, 
        name: 'Arthur', 
        type: 'Swordsman'
    };

    expect(swordsman).toEqual(correct);
});
