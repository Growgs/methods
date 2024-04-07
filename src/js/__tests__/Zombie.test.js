import Zombie from '../class/Zombie.js';

test('Правильно создаётся объект Zombie', () => {
    const zombie = new Zombie('Rotten');
    const correct = { 
        attack: 40, 
        defence: 10, 
        health: 100, 
        level: 1, 
        name: 'Rotten', 
        type: 'Zombie',
        maxHealth: 100
    };

    expect(zombie).toEqual(correct);
});
