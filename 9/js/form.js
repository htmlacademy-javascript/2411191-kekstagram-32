const form = document.querySelector('.img-upload__form');
const bodyElement = document.querySelector('body');
const inputElement = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const hashtagsElement = form.querySelector('.text__hashtags');
const commentElement = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const openModal = () => {
  overlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

};


const closeModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagsElement ||
  document.activeElement === commentElement;


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
}

/**
 * проверяет строку на количество символов
 * @param { string } value - строка для проверки
 * @returns { Boolean } - истина если строка меньше либо равна 140
 */
function checkCommentLength(value) {
  return value.length <= 140;
}

const normalizeTags = (stringOfTags) => stringOfTags
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

function checkHashtagsLength(value) {
  return normalizeTags(value).every((tag) => tag.length <= 20);
}

function checkFirstSymbol(value) {
  if (value.startsWith('#')) {
    return true;
  }
}

function checkMaxHashtags(value) {
  return value.split(' ').length <= 5;
}

function checkValidHashtags(value) {
  const HASHTAG_VALID = /^#[a-zа-яё0-9]{1,19}$/i;

  return normalizeTags(value).every((tag) => HASHTAG_VALID.test(tag));

}


const checkUniqueTags = (stringOfTags) => {
  const lowerCaseTags = normalizeTags(stringOfTags).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
pristine.addValidator(form.querySelector('.text__hashtags'), checkUniqueTags, 'Хештег должен быть уникальным', 3, true);
pristine.addValidator(form.querySelector('.text__hashtags'), checkMaxHashtags, 'Максимум 5 хештегов', 4, true);
pristine.addValidator(form.querySelector('.text__hashtags'), checkValidHashtags, 'Некорректный хештег', 2, true);
pristine.addValidator(form.querySelector('.text__hashtags'), checkFirstSymbol, 'Хештег должен начинаться с #', 1, true);
pristine.addValidator(form.querySelector('.text__hashtags'), checkHashtagsLength, 'Максимальная длина хештега 20 символов', 5, true);


pristine.addValidator(form.querySelector('.text__description'), checkCommentLength);


const formSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const openNewFile = () => {
  openModal();
};

const closeNewFile = () => {
  closeModal();
};

inputElement.addEventListener('change', openNewFile);
cancelButton.addEventListener('click', closeNewFile);
form.addEventListener('submit', formSubmit);


