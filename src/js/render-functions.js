import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

// Создаём один экземпляр лайтбокса
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <ul class="gallery-stats">
          <li class="stats-item">
            <p class="stats-title">Likes</p>
            <p class="stats-value">${likes}</p>
          </li>
          <li class="stats-item">
            <p class="stats-title">Views</p>
            <p class="stats-value">${views}</p>
          </li>
          <li class="stats-item">
            <p class="stats-title">Comments</p>
            <p class="stats-value">${comments}</p>
          </li>
          <li class="stats-item">
            <p class="stats-title">Downloads</p>
            <p class="stats-value">${downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');

  // Добавление новых элементов за одну операцию
  galleryEl.innerHTML = markup;

  // Обновляем модалку после добавления разметки
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
