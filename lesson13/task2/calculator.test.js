import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get squared', () => {
   const result = getSquaredArray([2, 4, 6]);

   expect(result).toEqual([4, 16, 36]);
});

it('should get odd', () => {
   const result = getOddNumbers([1, 4, 6, 55]);

   expect(result).toEqual([1, 55]);
});

it('should get sum', () => {
   const result = getSum(10, 20);

   expect(result).toEqual(30);
});
