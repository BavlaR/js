const addImage = imgSource => {
   const p = new Promise((resolve, reject) => {
      const imgElem = document.createElement('img');
      const containerElem = document.querySelector('.page');

      imgElem.alt = 'Some photo';
      imgElem.src = imgSource;

      containerElem.append(imgElem);

      const onImageLoaded = () => {
         const { width, height } = imgElem;
         resolve({ width, height });
      };

      imgElem.addEventListener('load', onImageLoaded);
      imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
   });

   return p;
};

const resPromise = addImage(
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-akes-And--227291596.jpg',
);

resPromise.then(data => console.log(data));
resPromise.catch(error => console.log(error));

export { addImage };
