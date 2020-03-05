import { countExpression } from '../games/brain-calc.js';

test('countExpression', () => {
  expect(countExpression(10, 20, '+')).toEqual(30);
  expect(countExpression(10, 20, '-')).toEqual(-10);
  expect(countExpression(10, 20, '*')).toEqual(200);
  expect(countExpression(15, 8, '+')).toEqual(23);
  expect(countExpression(15, 8, '-')).toEqual(7);
  expect(countExpression(15, 8, '*')).toEqual(120);
})
