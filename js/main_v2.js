(function () {
  const content = window.fudofabContent;
  const serviceRoot = document.querySelector("[data-services]");
  const teamRoot = document.querySelector("[data-team]");
  const galleryRoot = document.querySelector("[data-gallery]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const header = document.querySelector("[data-header]");

  // SVG Icons
  function iconInstagram() {
    return [
      '<svg viewBox="0 0 448 512" aria-hidden="true" focusable="false">',
      '<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S-.7 127.5-2.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"></path>',
      "</svg>"
    ].join("");
  }

  function iconX() {
    return [
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
      '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>',
      "</svg>"
    ].join("");
  }

  function iconLinkedin() {
    return [
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
      '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>',
      "</svg>"
    ].join("");
  }

  function iconMail() {
    return [
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
      '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>',
      "</svg>"
    ].join("");
  }

  function iconInstagramLarge() {
    return [
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
      '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>',
      "</svg>"
    ].join("");
  }

  // Dynamic Content Rendering
  serviceRoot.innerHTML = content.services.map((service) => `
    <article class="service-card" style="--service-a:${service.colorA};--service-b:${service.colorB}">
      <img src="${service.image}" alt="${service.title}">
      <h3>${service.title}</h3>
      <ul>${service.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");

  teamRoot.innerHTML = content.team.map((person) => `
    <article class="team-card" data-team-member="${content.team.indexOf(person)}">
      <img src="${person.image}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p>${person.role}</p>
      <div class="team-socials" style="display:none; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px;">
        <a href="${person.instagram}" target="_blank" rel="noreferrer" title="Instagram" class="team-social-icon">
          ${iconInstagram()}
        </a>
        <a href="${person.x || '#'}" target="_blank" rel="noreferrer" title="X (Twitter)" class="team-social-icon">
          ${iconX()}
        </a>
        <a href="${person.linkedin || '#'}" target="_blank" rel="noreferrer" title="LinkedIn" class="team-social-icon">
          ${iconLinkedin()}
        </a>
      </div>
      <a href="${person.instagram}" target="_blank" rel="noreferrer" class="team-link">
        ${iconInstagramLarge()}
        <span>Instagram</span>
      </a>
    </article>
  `).join("");

  galleryRoot.innerHTML = content.gallery.map((image, index) => `
    <button class="gallery-item" type="button" data-gallery-item="${index}" aria-label="Open gallery image ${index + 1}">
      <img src="${image}" alt="Gallery image ${index + 1}" loading="lazy">
    </button>
  `).join("");

  // Update year in footer
  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  // ============================================
  // ENHANCED NAVIGATION & INTERACTIONS
  // ============================================

  // Mobile menu toggle with animation
  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
    header.classList.toggle("nav-open");
  });

  // Close mobile menu when clicking nav links
  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      header.classList.remove("nav-open");
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target) && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      header.classList.remove("nav-open");
    }
  });

  // Smooth scrolling for navigation links
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header.offsetHeight;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          // Update active link after scrolling
          setTimeout(() => updateActiveLink(), 500);
        }
      }
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("[data-nav] a");

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 150;

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        const sectionTop = target.offsetTop;
        const sectionHeight = target.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  }

  // Initialize active link
  updateActiveLink();

  // Update active link on scroll
  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateActiveLink);
  });

  // ============================================
  // ADVANCED GALLERY LIGHTBOX
  // ============================================

  let currentGalleryIndex = 0;
  let lightbox = null;

  function openLightbox(index) {
    currentGalleryIndex = index;
    
    lightbox = document.createElement("div");
    lightbox.className = "lightbox is-open";
    
    const image = content.gallery[index];
    const caption = index === 0 ? "Our creative workspace" : `Project ${index + 1}`;
    
    lightbox.innerHTML = `
      <button type="button" aria-label="Close gallery image">&times;</button>
      <button type="button" class="lightbox-prev" aria-label="Previous image">&lsaquo;</button>
      <img src="${image}" alt="${caption}">
      <button type="button" class="lightbox-next" aria-label="Next image">&rsaquo;</button>
      <div class="lightbox-caption">${caption}</div>
      <div class="lightbox-counter">${index + 1} / ${content.gallery.length}</div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close on overlay click
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close button
    lightbox.querySelector("button[aria-label='Close gallery image']").addEventListener("click", closeLightbox);
    
    // Previous button
    lightbox.querySelector(".lightbox-prev").addEventListener("click", (e) => {
      e.stopPropagation();
      showPrevImage();
    });
    
    // Next button
    lightbox.querySelector(".lightbox-next").addEventListener("click", (e) => {
      e.stopPropagation();
      showNextImage();
    });

    // Keyboard navigation
    document.addEventListener("keydown", handleKeyboardNavigation);
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove("is-open");
      setTimeout(() => {
        if (lightbox) {
          lightbox.remove();
          lightbox = null;
        }
      }, 300);
      document.removeEventListener("keydown", handleKeyboardNavigation);
    }
  }

  function showNextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % content.gallery.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + content.gallery.length) % content.gallery.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const image = content.gallery[currentGalleryIndex];
    const imgElement = lightbox.querySelector("img");
    const caption = currentGalleryIndex === 0 ? "Our creative workspace" : `Project ${currentGalleryIndex + 1}`;
    
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
      imgElement.src = image;
      imgElement.alt = caption;
      lightbox.querySelector(".lightbox-caption").textContent = caption;
      lightbox.querySelector(".lightbox-counter").textContent = `${currentGalleryIndex + 1} / ${content.gallery.length}`;
      
      // Small delay for fade effect
      setTimeout(() => {
        imgElement.style.opacity = 1;
      }, 50);
    }, 300);
  }

  function handleKeyboardNavigation(e) {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "ArrowLeft") {
      showPrevImage();
    }
  }

  // Gallery click handler
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-item]");
    if (!button) return;

    const index = Number(button.dataset.galleryItem);
    openLightbox(index);
  });

  // ============================================
  // TEAM CARD INTERACTIONS
  // ============================================
  
  teamRoot.addEventListener("mouseenter", (e) => {
    const teamCard = e.target.closest(".team-card");
    if (teamCard) {
      const socialIcons = teamCard.querySelector(".team-socials");
      if (socialIcons) {
        socialIcons.style.display = "grid";
        socialIcons.style.animation = " fadeIn 0.3s ease-in-out";
      }
    }
  });

  teamRoot.addEventListener("mouseleave", (e) => {
    const teamCard = e.target.closest(".team-card");
    if (teamCard) {
      const socialIcons = teamCard.querySelector(".team-socials");
      if (socialIcons) {
        socialIcons.style.display = "none";
      }
    }
  });

  // Add fadeIn animation for team socials
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  // ============================================
  // EASTER EGG: CONSOLE MESSAGE
  // ============================================
  console.log("%c FUDOFAB ", "background: #ff2a80; color: #fff; font-size: 20px; font-weight: bold; padding: 5px;");
  console.log("%c Mind the edge cases. ", "background: #00e6ff; color: #000; font-size: 12px; padding: 2px; font-weight: bold;");

})();
