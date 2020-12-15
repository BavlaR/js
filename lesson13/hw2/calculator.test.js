import { calc } from './calculator';

it('+', () => {
   expect(calc('5 + 5')).toEqual('5 + 5 = 10');
});

it('-', () => {
   expect(calc('5 - 5')).toEqual('5 - 5 = 0');
});

it('*', () => {
   expect(calc('5 * 5')).toEqual('5 * 5 = 25');
});

it('/', () => {
   expect(calc('5 / 5')).toEqual('5 / 5 = 1');
});

it('!typeof string', () => {
   expect(calc(undefined)).toEqual(null);
});
