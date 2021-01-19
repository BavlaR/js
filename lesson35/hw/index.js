export const parseUser = json => {
   try {
      return JSON.parse(json);
   } catch (e) {
      return null;
   }
};
