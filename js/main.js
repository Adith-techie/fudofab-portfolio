(function () {
  const content = window.fudofabContent;
  const serviceRoot = document.querySelector("[data-services]");
  const teamRoot = document.querySelector("[data-team]");
  const galleryRoot = document.querySelector("[data-gallery]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");

  function iconInstagram() {
    return [
      '<svg viewBox="0 0 448 512" aria-hidden="true" focusable="false">',
      '<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S-.7 127.5-2.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"></path>',
      "</svg>"
    ].join("");
  }

  serviceRoot.innerHTML = content.services.map((service) => `
    <article class="service-card" style="--service-a:${service.colorA};--service-b:${service.colorB}">
      <img src="${service.image}" alt="">
      <div>
        <h3>${service.title}</h3>
        <ul>${service.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  teamRoot.innerHTML = content.team.map((person) => `
    <article class="team-card">
      <img src="${person.image}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p>${person.role}</p>
      <a href="${person.instagram}" target="_blank" rel="noreferrer">
        ${iconInstagram()}
        <span>Instagram</span>
      </a>
    </article>
  `).join("");

  galleryRoot.innerHTML = content.gallery.map((image, index) => `
    <button class="gallery-item" type="button" data-gallery-item="${index}" aria-label="Open gallery image ${index + 1}">
      <img src="${image}" alt="">
    </button>
  `).join("");

  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
    }
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-item]");
    if (!button) return;

    const image = content.gallery[Number(button.dataset.galleryItem)];
    const modal = document.createElement("div");
    modal.className = "lightbox";
    modal.innerHTML = `
      <button type="button" aria-label="Close gallery image">&times;</button>
      <img src="${image}" alt="">
    `;
    modal.addEventListener("click", () => modal.remove());
    document.body.appendChild(modal);
  });
})();
