// algo
// 1. addEventListener
// 2. read form
// 3. make post
// 4. validate
const user = {
   email: 'someemail@mail.com',
   firsName: 'Bob',
   lastName: 'Baisen',
   city: 'Kyiv',
   age: 1000000,
};

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

fetch(baseUrl, {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json;charset=utf-8',
   },
   body: JSON.stringify(user),
})
   .then(response => response.json())
   .then(res => console.log(res));
