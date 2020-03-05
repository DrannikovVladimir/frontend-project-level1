import { getGcd } from '../games/brain-gcd.js';

test('getGcd', () => {
  expect(getGcd(10, 5)).toEqual(5);
  expect(getGcd(20, 36)).toEqual(4);
  expect(getGcd(70, 50)).toEqual(10);
  expect(getGcd(18, 12)).toEqual(6);
  expect(getGcd(225, 50)).toEqual(25);
  expect(getGcd(3, 5)).toEqual(1);
})
