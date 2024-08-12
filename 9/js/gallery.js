import { generateMiniature } from './get-miniature.js';
import { openModalPicture } from './modal-picture.js';

const containerMiniature = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  containerMiniature.addEventListener('click', (evt) => {
    const photoElement = evt.target.closest('[data-photo-element-id]');
    if (!photoElement) {

      return;
    }
    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +photoElement.dataset.photoElementId
    );

    openModalPicture(picture);

  });
  generateMiniature(pictures, containerMiniature);
};

export { renderGallery };
