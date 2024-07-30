import {getPictures} from './data.js';
const drawMiniature = document.querySelector ('#picture').content;
const containerMiniature = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const arrayDataMiniature = getPictures(25);


arrayDataMiniature.forEach(({url, likes, comments}) => {

  const photoElement = drawMiniature.cloneNode(true);

  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;

  fragment.append(photoElement);

});

containerMiniature.append(fragment);
