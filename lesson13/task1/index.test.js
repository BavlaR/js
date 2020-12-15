import { getEvenNumbers } from './index';

it('return only even numbers', () => {
   const result = getEvenNumbers([2, 7, 5, 6, 102, 11]);
   expect(result).toEqual([2, 6, 102]);
});

it('Compare numbers', () => {
   expect(17).toEqual(17);
});

it('Compare numbers', () => {
   expect(17).toEqual(18);
});
