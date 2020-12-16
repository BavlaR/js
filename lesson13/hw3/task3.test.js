import { getAdults } from './task3';

it('adult user', () => {
   expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('empty obj', () => {
   expect(getAdults({})).toEqual({});
});

it('adult user', () => {
   expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toHaveProperty('John Doe');
});
