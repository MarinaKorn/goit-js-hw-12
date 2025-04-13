import { getImagesByQuery } from './pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './render-functions.js';

import iziToast from 'izitoast';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const loaderTop = document.querySelector('.loader-text');
const loaderBottom = document.querySelector('.loader-text.bottom');
const gallery = document.querySelector('.gallery');

let query = '';
let page = 1;
let totalPages = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.elements.searchQuery.value.trim();
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  loaderTop.classList.remove('hidden');
  loaderBottom.classList.add('hidden');

  if (!query) return;

  try {
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      iziToast.error({ message: 'No images found.' });
      return;
    }

    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / 15);
    if (page < totalPages) showLoadMoreButton();
  } catch (error) {
    iziToast.error({ message: 'Something went wrong' });
  } finally {
    loaderTop.classList.add('hidden');
    loaderBottom.classList.remove('hidden');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  loaderBottom.classList.remove('hidden');

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({ message: "You've reached the end of search results." });
    }

    const { height: cardHeight } = document.querySelector('.gallery-item').getBoundingClientRect();
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
  } catch (err) {
    iziToast.error({ message: 'Something went wrong' });
  } finally {
    loaderBottom.classList.add('hidden');
  }
});
