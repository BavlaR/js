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
   imgElem.addEventListener('error', () => callback('Image load is failed...'));
};

const onImageLoaded = (error, width, height) => {
   if (error) {
      console.log(error);
      return;
   }

   const sizeElem = document.querySelector('.image-size');
   sizeElem.textContent = `${width} x ${height}`;
};

addImage(
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
   onImageLoaded,
);
