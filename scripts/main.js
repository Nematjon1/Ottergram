;'use strict';
let DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]',
DETAIL_TITLE_SELECTOR = '[data-image-role="title"]',
DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]',
THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]',
HIDDEN_DETAIL_CLASS = 'hidden-detail',
TINY_EFFECT_CLASS = 'is-tiny',
ESC_KEY = 27;




const setDetails = (imageUrl, titleText) => {
   let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
   detailImage.setAttribute('src', imageUrl);
   let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
   detailTitle.textContent = titleText;
};

const imageFromThumb = (thumbnail) => {
   return thumbnail.getAttribute('data-image-url');
};

const titleFromThumb = (thumbnail) => {
  return thumbnail.getAttribute('data-image-title');
;}

const setDetailsFromThumb = (thumbnail) => {
   setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
};

const addThumbClickHendler = (thumb) => {
   thumb.addEventListener('click', function(event){
      event.preventDefault();
      setDetailsFromThumb(thumb);
      showDetails();
   });
};
const getThumbnailsArray = () => {
   let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
   let thumbnailArray=[].slice.call(thumbnails);
   return thumbnailArray;
};

const hideDetails = () => {
   document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

const showDetails = () => {
   let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
   document.body.classList.remove(HIDDEN_DETAIL_CLASS);
   frame.classList.add(TINY_EFFECT_CLASS);
   setTimeout(function(){
      frame.classList.remove(TINY_EFFECT_CLASS);
   }, 140);
};


const addKeyPressHandler = () => {
   document.body.addEventListener('keyup', function(event){
      event.preventDefault();
      if(event.keyCode === ESC_KEY){
         hideDetails();
      };
   });
};

const initializeEvents = () => {
   let thumbnails = getThumbnailsArray();
   thumbnails.forEach(addThumbClickHendler);
   addKeyPressHandler();
};


initializeEvents();
