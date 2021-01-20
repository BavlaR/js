const url = 'https://api.github.com/users';

const getUserBlog = async userId => {
   const promiseValue = await fetch(`${url}/${userId}`)
      .then(response => response.json())
      .then(res => res.blog);

   return promiseValue;
};

const getUsersBlogs = idArr => Promise.all(idArr.map(oneId => getUserBlog(oneId)));

getUsersBlogs(['facebook', 'google', 'github']).then(res => console.log(res));
