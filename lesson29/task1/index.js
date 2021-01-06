export const addImage = (imgSource, callback) => {
   const imgElem = document.createElement('img');
   const containerElem = document.querySelector('.page');

   imgElem.alt = 'Some photo';
   imgElem.src = imgSource;

   containerElem.append(imgElem);

   const onImageLoaded = () => {
      const { width, height } = imgElem;
      callback(null, width, height);
   };

   imgElem.addEventListener('load', onImageLoaded);
   imgElem.addEventListener('error', () => callback('Image load fail'));
};

const onImageLoaded = (error, width, height) => {
   if (error) {
      console.log(error);
      return;
   }

   const sizeElem = document.querySelector('.image-size');
   sizeElem.textContent = `${width} x ${height}`;
};
