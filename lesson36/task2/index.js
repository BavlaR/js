/* eslint-disable camelcase */
import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderReposList, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
   avatar_url: 'https://avatars3.githubusercontent.com/u10001',
   name: '',
   location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
   showSpinner();

   cleanReposList();

   const userName = userNameInputElem.value;

   try {
      const userData = await fetchUserData(userName);
      renderUserData(userData);
      const reposList = await fetchRepositories(userData.repos_url);
      renderReposList(reposList);
   } catch (e) {
      alert(e.message);
   } finally {
      hideSpinner();
   }

   // fetchUserData(userName)
   //    .then(userData => {
   //       renderUserData(userData);
   //       return userData.repos_url;
   //    })
   //    .then(url => fetchRepositories(url))
   //    .then(reposList => {
   //       renderReposList(reposList);
   //       hideSpinner();
   //    })
   //    .catch(err => {
   //       hideSpinner();
   //       alert(err.message);
   //    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
