const baseUrl = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/users';

export function getUsersList() {
   return fetch(baseUrl).then(response => response.json());
}

export function getUserById(userId) {
   return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

export function createUser(userData) {
   return fetch(baseUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
   });
}

export function updateUser(userId, userData) {
   return fetch(`${baseUrl}/${userId}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
   });
}

export function deleteUser(userId) {
   return fetch(`${baseUrl}/${userId}`, {
      method: 'DELETE',
   });
}
