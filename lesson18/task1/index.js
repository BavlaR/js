'use strict';

const event = {
   message: 'Welcome to the party',
   guests: [
      { name: 'Donald', age: 18, email: 'donald@server.com' },
      {
         name: 'Joe',
         age: 16,
         email: 'joe@server.com',
      },
      {
         name: 'Marusia',
         age: 89,
         email: 'kakoi-email@server.com',
      },
   ],
   getInvitations() {
      return this.guests
         .filter(({ age }) => age >= 18)
         .map(guest => {
            return {
               email: guest.email,
               message: `Dear ${guest.name}! ${this.message}!`,
            };
         });
   },
};

console.log(event.getInvitations());
