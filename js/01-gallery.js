import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
  })
  .join("");

ulGallery.insertAdjacentHTML("afterbegin", markup);

ulGallery.addEventListener("click", openModal);
function openModal(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  const selectedImg = event.target.dataset.source;
  console.log(selectedImg);
  const instance = basicLightbox.create(` 
<div class="modal">
  <img src="${selectedImg}" width="auto" height="auto" >
  </div>   
`);

  instance.show();
}
