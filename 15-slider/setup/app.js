const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter += 1;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter -= 1;
  carousel();
});

function carousel() {
  // working with slides
  /* counter === slides.length ? (counter = 0) : false;
  counter < 0 ? (counter = slides.length - 1) : false; */
  // working with buttons
  counter < slides.length - 1
    ? (nextBtn.style.display = "block")
    : (nextBtn.style.display = "none");
  counter > 0
    ? (prevBtn.style.display = "block")
    : (prevBtn.style.display = "none");
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
