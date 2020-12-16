import reverseArray from './task1';

it('null test string', () => {
   expect(reverseArray('10, 20, 35, 89')).toEqual(null);
});

it('do reverse', () => {
   expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

it('array containing', () => {
   expect(reverseArray([10, 11, 12, 13, 14, 15])).toEqual(
      expect.arrayContaining([10, 11, 12, 13, 14, 15]),
   );
});
