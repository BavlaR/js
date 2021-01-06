const addImage = (imgSource, callback) => {
   const imgElem = document.createElement('img');
   const containerElem = document.querySelector('.page');

   imgElem.alt = 'Some photo';
   imgElem.src = imgSource;

   containerElem.append(imgElem);

   const onImageLoaded = () => {
      callback(null, imgElem);
   };

   imgElem.addEventListener('load', onImageLoaded);
   imgElem.addEventListener('error', () => callback('Image load is failed...'));
};

const onImageLoaded = (error, imgElem) => {
   if (error) {
      console.log(error);
      return;
   }

   const { width, height } = imgElem;
   const sizeElem = document.querySelector('.image-size');
   sizeElem.textContent = `${width} x ${height}`;
};

export { addImage };
