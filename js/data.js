const PICTURE_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const NAMES = ['Коля', 'Дмитрий', 'Екатерина', 'Максим', 'Елизавета'];
const COMMENT_LINES = [
  'Всё хорошо.',
  'В целом всё неплохо. Но не всё.',
  'Красиво!',
  'Очень хорошая фотография.',
  'Хорошо бы убрать палец ихз кадра).',
  'очень живописно!',
];
const DESCRIPTION = [
  'Самые вкусные стейки под гиннесс в #crosskeys #beef #beer #rocknroll',
  'Нагулялись по Александровсому саду и зашли в #Вареничная  #russianfood',
  'чилим на даче ',
  'i love you  #love',
  'не бывает плохой погоды, бывет плохое настроение =р',
  'i just want you #ozzyonelove #ozzyozbourne',
  ' good day',
  'с днем рожденьем меня!!!  #happybirthdaytome',
];

function checkLength (stringMain, maxLength) {
  if (stringMain <= maxLength) {
    return true;
  }else {
    return false;
  }
}
checkLength(10,15);


function checkPalindromy (stringData) {
  return stringData.split('').reverse().join('') === stringData;
}
checkPalindromy('дед');


// Структура каждого объекта должна быть следующей:

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return result;
};


const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = ()=> {
  let numberId = 0;
  return () => {
    numberId += 1;
    return numberId;
  };
};


const generateRandomId = createIdGenerator();

const createMessage = () => Array.from (
  {length: getRandomInteger(1,2)},
  () => getRandomArrayElement(COMMENT_LINES),
);

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MAX_COUNT, AVATAR_MIN_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id : generateRandomId(),
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MAX_COUNT, LIKE_MIN_COUNT) ,
  comments:Array.from (
    {length: getRandomInteger(COMMENT_MAX_COUNT, COMMENT_MIN_COUNT)},
    createComment
  )
});


const getPictures = function(){
  return Array.from ({
    length: PICTURE_COUNT},(_, index) => createPicture(index + 1)
  );

};
getPictures();

export {PICTURE_COUNT, LIKE_MAX_COUNT, LIKE_MIN_COUNT,AVATAR_MIN_COUNT, AVATAR_MAX_COUNT, COMMENT_LINES, COMMENT_MAX_COUNT, COMMENT_MIN_COUNT, NAMES};
