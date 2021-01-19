export const parseUser = json => {
   try {
      const result = JSON.parse(json);
      return result;
   } catch (e) {
      return null;
   }
};
