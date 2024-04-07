import Character from '../class/Character.js';

test('Создание экземпляра Character', () => {
    // Создаем эталонный объект
    const referenceCharacter = {
        name: 'TestName',
        type: 'Bowman',
        health: 100,
        level: 1,
        maxHealth: 100
    };

    // Создаем реальный экземпляр класса Character
    const character = new Character('TestName', 'Bowman');

    // Сравниваем объекты
    expect(character).toEqual(referenceCharacter);
});
