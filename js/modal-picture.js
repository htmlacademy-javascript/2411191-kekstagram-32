const bigPicture = document.querySelector('.big-picture');
const commentCountElement = bigPicture.querySelector('.social__comment-count');
const listComments = bigPicture.querySelector('.social__comments');
const socialCommentsLoader = bigPicture.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');


const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};


const renderComments = (comments) => {
  listComments.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  listComments.append(fragment);
};

// функция закрытия большой картинки, модального окна
const closeModalPicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};


function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalPicture();
  }
}

// //обработчик события клика кнопки закрытия модального окна
buttonClose.addEventListener('click', () => {
  closeModalPicture();
});


const renderPictureDetails = ({ url, likes, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

};

// функция открытия большой картинки, модального окна

const openModalPicture = (data) => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  socialCommentsLoader.classList.add('hidden');
  commentCountElement.classList.add('hidden');
  document.addEventListener('keydown',onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

export { openModalPicture, onDocumentKeydown };
