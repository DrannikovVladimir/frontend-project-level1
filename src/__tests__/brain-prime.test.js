import { isPrime } from '../games/brain-prime.js';

test('isPrime', () => {
  expect(isPrime(2)).toEqual(true);
  expect(isPrime(3)).toEqual(true);
  expect(isPrime(5)).toEqual(true);
  expect(isPrime(7)).toEqual(true);
  expect(isPrime(4)).toEqual(false);
  expect(isPrime(6)).toEqual(false);
  expect(isPrime(10)).toEqual(false);
  expect(isPrime(15)).toEqual(false);
});
