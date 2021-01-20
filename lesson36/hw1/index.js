const url = 'https://api.github.com/users';

const getUserBlog = async userId => {
   const promiseValue = await fetch(`${url}/${userId}`)
      .then(response => response.json())
      .then(res => res.blog);

   return promiseValue;
};

export const getUsersBlogs = idArr => Promise.all(idArr.map(oneId => getUserBlog(oneId)));
