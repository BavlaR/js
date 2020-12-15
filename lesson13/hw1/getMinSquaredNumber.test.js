import getMinSquaredNumber from './getMinSquaredNumber';

it('empty array', () => {
   const num = getMinSquaredNumber([]);
   expect(num).toEqual(null);
});

it('try typeof string', () => {
   const num = getMinSquaredNumber('6 , -5, 10');
   expect(num).toEqual(null);
});

it('get squared', () => {
   const num = getMinSquaredNumber([10, 6, -5, 12, 15]);
   expect(num).toEqual(25);
});
