import { isEven } from '../games/brain-even.js';

test('isEven', () => {
  expect(isEven(2)).toEqual(true);
  expect(isEven(4)).toEqual(true);
  expect(isEven(10)).toEqual(true);
  expect(isEven(13)).toEqual(false);
  expect(isEven(15)).toEqual(false);
  expect(isEven(11)).toEqual(false);
  expect(isEven(111)).toEqual(false);
})
