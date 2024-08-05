const drawMiniature = document.querySelector('#picture').content.querySelector('.picture');


const createMiniature = ({ comments, description, likes, url, id }) => {
  const photoElement = drawMiniature.cloneNode(true);

  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.dataset.photoElementId = id;
  return photoElement;
};

const generateMiniature = (pictures, containerMiniature) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const photoElement = createMiniature(picture);
    fragment.append(photoElement);
  });
  containerMiniature.append(fragment);
};


export { generateMiniature };
