var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var TACOCAT = 'https://i.imgur.com/BAJirn6.png';
var TACOCAT_THUMBNAIL_BACKUP = '';

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    if (thumb.getAttribute('data-image-url') == TACOCAT) {
      thumb.setAttribute('data-image-url', TACOCAT_THUMBNAIL_BACKUP);
      randomTacoCat(getThumbnailsArray());
    }
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  randomTacoCat(thumbnails);
}

function randomTacoCat(thumbnails) {
  'use strict';
  var randomSelection = Math.floor(Math.random() * thumbnails.length) + 1;
  console.log('randomSelection = ' + randomSelection);
  TACOCAT_THUMBNAIL_BACKUP = thumbnails[randomSelection].getAttribute('data-image-url');
  thumbnails[randomSelection].setAttribute('data-image-url', 'https://i.imgur.com/BAJirn6.png');
}

initializeEvents();
