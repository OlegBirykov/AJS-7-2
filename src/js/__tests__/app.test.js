import phoneNormalize from '../app';

test('Номер должен содержать только цифры и символ "+"', () => {
  expect(phoneNormalize('+7 927 000 00 00')).toBe('+79270000000');
  expect(phoneNormalize('+86 000 000 0000')).toBe('+860000000000');
});

test('Номер должен начинаться с кода страны', () => {
  expect(phoneNormalize('5 (927) 000-00-00')).toBe('+59270000000');
  expect(phoneNormalize('86 000 000 0000')).toBe('+860000000000');
});

test('Десятизначный номер без кода страны или после восьмёрки должен быть российским', () => {
  expect(phoneNormalize(' (927) 000-00-00')).toBe('+79270000000');
  expect(phoneNormalize('8 (927) 000-00-00')).toBe('+79270000000');
});
