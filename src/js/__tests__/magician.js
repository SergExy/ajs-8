import Magician from '../Magician';

test.each([
  ['name', 'Magician', true, ''],
  [123, 'Magician', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Magician', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Magician', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Magician(name, type)).not.toThrow();
  } else {
    expect(() => new Magician(name, type)).toThrow(Error);
    expect(() => new Magician(name, type)).toThrow(errorMessage);
  }
});
