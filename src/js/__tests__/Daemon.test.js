import Daemon from '../class/Daemon.js';

test('Правильно создаётся объект Daemon', () => {
    const daemon = new Daemon('Specter');
    const correct = { 
        attack: 10, 
        defence: 40, 
        health: 100, 
        level: 1, 
        name: 'Specter', 
        type: 'Daemon',
        maxHealth: 100
    };

    expect(daemon).toEqual(correct);
});
