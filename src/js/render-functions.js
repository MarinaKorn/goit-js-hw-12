const gallery = document.querySelector('.gallery');

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        <div class="meta">
          <div><b>Likes</b> ${img.likes}</div>
          <div><b>Views</b> ${img.views}</div>
          <div><b>Comments</b> ${img.comments}</div>
          <div><b>Downloads</b> ${img.downloads}</div>
        </div>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoadMoreButton() {
  document.querySelector('.load-more').classList.remove('hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('.load-more').classList.add('hidden');
}
