import Magician from '../class/Magician.js';

test('Правильно создаётся объект Magician', () => {
    const magician = new Magician('Merlin');
    const correct = { 
        attack: 10, 
        defence: 40, 
        health: 100, 
        level: 1, 
        name: 'Merlin', 
        type: 'Magician'
    };

    expect(magician).toEqual(correct);
});
