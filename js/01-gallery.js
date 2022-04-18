import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
};
const markupHtml = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
refs.galleryEl.insertAdjacentHTML("afterbegin", markupHtml);
refs.galleryEl.addEventListener("click", openModal);
let instance;
function openModal(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") return;
  const dataSource = e.target.dataset.source;

  instance = basicLightbox.create(`
      <img src='${dataSource}'>
  `);
  instance.show();
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    instance.close();
  }
});