import withdraw from './task2';

it('amount < balance', () => {
   expect(withdraw(['Alex', 'Jack', 'John'], [10, 20, 30], 'Jack', 21)).toEqual(-1);
});

it('amount > balance', () => {
   expect(withdraw(['Alex', 'Jack', 'John'], [10, 20, 30], 'Alex', 8)).toEqual(2);
});

it('amount > balance', () => {
   expect(typeof withdraw(['Alex', 'Jack', 'John'], [10, 20, 30], 'Alex', 8) === 'number').toEqual(
      true,
   );
});
