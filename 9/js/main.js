/*
    Импорты других модулей
    Вызовы общих функций
    Настройка скриптов
    ...
*/
import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';
renderGallery(getPictures());
import './form.js';
