(function () {
  "use strict";

  var TOTAL_PAGES = 11;
  var currentPage = 1; // 1-indexed

  function pagePath(n) {
    var padded = n < 10 ? "0" + n : "" + n;
    return "assets/comic/page-" + padded + ".png";
  }

  var comicImage = document.getElementById("comicImage");
  var pageIndicator = document.getElementById("pageIndicator");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var fullscreenBtn = document.getElementById("fullscreenBtn");

  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");
  var lightboxIndicator = document.getElementById("lightboxIndicator");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");

  function render() {
    var src = pagePath(currentPage);
    comicImage.src = src;
    comicImage.alt = "Quilsbee comic page " + currentPage;
    pageIndicator.textContent = "Page " + currentPage + " / " + TOTAL_PAGES;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === TOTAL_PAGES;

    if (lightbox.classList.contains("open")) {
      lightboxImage.src = src;
      lightboxImage.alt = comicImage.alt;
      lightboxIndicator.textContent = pageIndicator.textContent;
    }
  }

  function goPrev() {
    if (currentPage > 1) {
      currentPage -= 1;
      render();
    }
  }

  function goNext() {
    if (currentPage < TOTAL_PAGES) {
      currentPage += 1;
      render();
    }
  }

  function openLightbox() {
    lightbox.classList.add("open");
    render();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

  comicImage.addEventListener("click", openLightbox);
  comicImage.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox();
    }
  });

  fullscreenBtn.addEventListener("click", openLightbox);
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", goPrev);
  lightboxNext.addEventListener("click", goNext);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  });

  render();
})();
