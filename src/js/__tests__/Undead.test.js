import Undead from '../class/Undead.js';

test('Правильно создаётся объект Undead', () => {
    const undead = new Undead('Ghoul');
    const correct = { 
        attack: 25, 
        defence: 25, 
        health: 100, 
        level: 1, 
        name: 'Ghoul', 
        type: 'Undead'
    };

    expect(undead).toEqual(correct);
});
